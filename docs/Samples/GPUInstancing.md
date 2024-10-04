---
title: GPU Instancing
hide_table_of_contents: false
---

## Overview

:::note
Requires Unity.Jobs and Unity.Burst
:::

<details>
    <summary>What is GPU Instancing?</summary>
    
    GPU instancing is a draw call optimization method that renders multiple copies of a mesh with the same material in a single draw call. Each copy of the mesh is called an instance. This is useful for drawing things that appear multiple times in a scene, for example, trees or bushes.

    GPU instancing renders identical meshes in the same draw call. To add variation and reduce the appearance of repetition, each instance can have different properties, such as Color or Scale. Draw calls that render multiple instances appear in the Frame Debugger as Render Mesh (instanced).

    Read more: https://docs.unity3d.com/Manual/GPUInstancing.html
</details>

<details>
    <summary>What is the Job System?</summary>
    
    Unity’s job system lets you create multithreaded code so that your application can use all available CPU cores to execute your code. This provides improved performance because your application uses the capacity of all the CPU cores it’s running on more efficiently, rather than running all code on one CPU core.

    You can use the job system by itself, but for improved performance, you should also use the Burst compiler, which is specifically designed to compile jobs for Unity’s job system. The Burst compiler has improved code generation, which results in increased performance and a reduction of battery consumption on mobile devices.

    Read more: https://docs.unity3d.com/Manual/JobSystemOverview.html
</details>

Use GPU instancing alongside the Unity Jobs system and Burst Compiler to render many meshes with fantastic performance. This is done through `UnityEngine.Graphics`, this class offers many ways to render meshes, this uses:
```csharp lineWrap=true
Graphics.RenderMeshIsntanced<T>(RenderParams rparams, Mesh mesh, int subMeshIndex, NativeArray<T> instanceData, [int instanceCount = -1], [int startInstance = 0])`
```
The `NativeArray<T>` will be of type Matrix4x4. Which can be easily manipulated and being a NativeArray means that it is already the correct type to be working inside of the Job system.


Provides base classes to work off of, including:
- Pool Instance Manager
- Dynamic Instance Manager
- Multi Instance Manager
- LOD Instance Manager
- Single Instance Manager

Each problem often requires a custom solution, which is why there are so many different classes to work off of which will provide examples how to achieve different effects. It is best to write your own to ensure there is no extra computing being done that would impact performance. 


## Classes

![alt image](/img/Flow.png)

Green represents base classes, whereas blue are demos using that base class. When drawing the meshes, they require a Matrix4x4, which will contain a position, rotation and scale. Therefore all of these can have positions, rotations and scales set, however, it does not support adjusting them. An example of this is SingleInstanceManager, it does not utilize prerender for any jobs, it is simply all boiler plate code that renders a `NativeArray<Matrix4x4>`, which is perfect for some cases, such as the Perlin Noise demo. Where inside the prerender we directly modify the matrix rather then store additional `NativeArrays` for data, as compared to the `PoolInstanceManager` that has NativeArrays for positions, rotations and scale, which can easily be adjust outside of the job system. 

**SingleInstanceManager**
- Boilerplate code

**PoolInstanceManager**
- Position
- Rotation
- Scale
- Add points
- Remove points
- Single mesh

**DynamicInstanceManager** 
- Position
- Rotation
- Scale
- single mesh

**MultiInstanceManager**
- Position
- Rotation
- Scale
- Multiple meshes

**LODInstanceManager**
- Position
- Rotation
- Scale
- Multiple meshes
- Distance based mesh selected

## Mesh Set

`InstanceMeshSet` is a scriptable object for the instance managers to reference. It contains an array of `InstanceMesh`, where you will be able to set the mesh, material and other rendering options. You can create them in the project by right clicking and pressing `Laio/Insance Mesh Set`.
```csharp
public class InstanceMesh
{
    public Mesh mesh;
    public Material material;
    public int submeshIndex = 1;
    public int layer;
    public ShadowCastingMode shadowCastingMode;
    public bool receiveShadows;
}
```

It is an array to allow for multi mesh managers, however, for single mesh managers it will grab the mesh at index `0`.

## Order of execution

`Setup()` will set the camera, available instances along with calling `Allocation()`. Note that `InstanceManagerBase.cs` does not call `Allocate()` inside of `Setup()`, child classes are required to call it.

`Allocation(bool)` is where we will allocate all of the native arrays required to run the class. We also need to dealocate it, which is handled by Unity's `OnDestroy()`. 
If you are override allocation and plan on allocating more natives array, ensure you pass `FALSE` when calling `base.Allocate()`, this will prevent `FinishAllocation()` getting called before it should. Ensure you add the call at the end of the override.
```csharp
if (finishAllocation)
    FinishAllocation();
```
Upon allocation completing, the method `PostAllocation()` will be called, which is where you should initialize the Matrix data if required.

For the update loop, it first calls `PreRender()` where we will update data as needed. Afterwhich `Render()` is called. 

If override prerender ensure that when you call `base.PreRender()` you are passing it false. Along with check if you should if you should `finishPreRender`, if so, call the method FinishPreRender();

```csharp
protected override void PreRender(bool finishPreRender = true)
{
    base.PreRender(false);

    //Code here

    if (finishPreRender)
        FinishPreRender();
}
```

## Performance

`InstanceManagerBase.cs` contains constants for viewing performance. If you have no need for it, you can remove them along with the `OnGUI()` method. (Note that it is all wrapped inside a UNITY_EDITOR, so it will not show up in builds)

```csharp
//Constants
public const KeyCode DISPLAY_PERFORMANCE_HOTKEY = KeyCode.Equals;
public const bool DEFAULT_PERFORMANCE_ON = true;
```

## Single Instance Manager

To get started with the single instance manager, override `PostAllocation` and setup the matrix array `_matrixData`. 

```csharp
protected override void PostAllocation()
{
    base.PostAllocation();
    GridLayout();
}

private void GridLayout()
{
    int rowSize = (int)Mathf.Sqrt(AvailableInstances);

    for (int i = 0; i < AvailableInstances; i++)
    {
        int x = i % rowSize;
        int y = i / rowSize;

        _matrixData[i] = Matrix4x4.TRS(
            new float3(x, 0, -y),
            Quaternion.identity,
            Vector3.one);
    }
}
```

## Pool Instance Manager


### PoolInstanceData

The struct `PoolInstanceData` is used to couple data related to a single instance together. Contains position, rotation, scale, along with the index in the native array and whether it should be rendered. The `doRender` flag acts as whether it exists yet, if you try and add a point, it will go through the array of `PoolInstanceData` and find the first instance where `doRender = false` and override it.

```csharp
public struct PoolInstanceData
{
    public Vector3 position;
    public Quaternion rotation;
    public Vector3 scale;

    public int index;
    public bool doRender;
}
```

The PoolInstanceManager has 4 jobs. `UpdateMatrixJob`, `UpdatePointsJob`, `AddPointsJob`, `RemovePointsJob`. Whenever you call `UpdatePointsJob`, `AddPointsJob` or `RemovePointsJob` the job will be executed immediately, therefore it is best to make all of the changes in batches rather then calling it many times. These changes get stored inside the `NativeArray<PoolInstanceData>` and the flag `doPreRender` is flagged, as changes have been detected. Prerender takes care of the `UpdateMatrixJob` when it will go through the `NativeArray<PoolInstanceData>` and populate the matrix data to be passed into render. The entire array will not always be used, therefore it also needs to track the length of useable data in the matrix array, which is the purpose of `NativeArray<int> _matrixLength`. It is a native array to be passed to the jobs system with only the length of one. 

### Public methods

```csharp
public virtual void Setup(int instances)
```

```csharp
public void CopyData(out NativeArray<PoolInstanceData> data)
```

```csharp
public void UpdatePoints(NativeArray<PoolInstanceData> toUpdate)
```

```csharp
public void UpdatePoints(PoolInstanceData[] toUpdate)
```

```csharp
public void RemovePoints(int[] toRmove)
```

```csharp
public void AddPoints(PoolInstanceData[] toAdd)
```

```csharp 
public void UpdateData(ref NativeArray<PoolInstanceData> data)
```

### Protected methods

```csharp
protected virtual void PostAllocation()
```

```csharp
protected virtual void Deallocate()
```

```csharp
protected virtual void Allocate(bool finishAllocation = true)
```

```csharp
protected virtual void PreRender(bool finishPreRender= true)
```

```csharp
protected virtual void Render()
```

## Dynamic Instance Manager

Has a NativeArray for positions, rotations, and scales. Runs `UpdateMatrixJob` every frame to update the matrix data to match the data inside of the native arrays for positions, rotations and scale.

### Public methods

```csharp
public virtual void Setup(int instances)
```

### Protected methods

```csharp
protected virtual void PostAllocation()
```

```csharp
protected virtual void Deallocate()
```

```csharp
protected virtual void Allocate(bool finishAllocation = true)
```

```csharp
protected virtual void PreRender(bool finishPreRender= true)
```

```csharp
protected virtual void Render()
```

## Multi Instance Manager



### Public methods

```csharp
public virtual void Setup(int instances)
```

### Protected methods

```csharp
protected virtual void PostAllocation()
```

```csharp
protected virtual void Deallocate()
```

```csharp
protected virtual void Allocate(bool finishAllocation = true)
```

```csharp
protected virtual void PreRender(bool finishPreRender= true)
```

```csharp
protected virtual void Render()
```

## LOD Instance Manager

### Public methods

```csharp
public virtual void Setup(int instances)
```

### Protected methods

```csharp
protected virtual void PostAllocation()
```

```csharp
protected virtual void Deallocate()
```

```csharp
protected virtual void Allocate(bool finishAllocation = true)
```

```csharp
protected virtual void PreRender(bool finishPreRender= true)
```

```csharp
protected virtual void Render()
```
