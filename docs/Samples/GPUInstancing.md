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

By combining GPU instancing with Unity’s Job System and Burst Compiler, you can render large numbers of meshes with exceptional performance. This is done through UnityEngine.Graphics, specifically using:
```csharp lineWrap=true
Graphics.RenderMeshIsntanced<T>(RenderParams rparams, Mesh mesh, int subMeshIndex, NativeArray<T> instanceData, [int instanceCount = -1], [int startInstance = 0])`
```
The `NativeArray<T>` type will typically be Matrix4x4, which can be easily manipulated and is the optimal type to use within the Job System.

## Base Classes

Provides base classes to work off of, including:
- Pool Instance Manager
- Dynamic Instance Manager
- Multi Instance Manager
- LOD Instance Manager
- Single Instance Manager

Each scenario often requires a unique approach, which is why multiple classes are available to suit different needs. Writing your own manager class ensures no unnecessary computations impact performance.

## Classes

![alt image](/img/Flow.png)

Green indicates base classes, while blue represents demos that utilize these base classes. All managers require a `Matrix4x4` array, which contains the position, rotation, and scale information. These managers allow you to set positions, rotations, and scales, though adjustments are not always easily supported.

For example, the SingleInstanceManager does not utilize prerender jobs, making it purely boilerplate code that simply renders a `NativeArray<Matrix4x4>`. This is ideal for cases like the Perlin Noise demo, where matrices are directly modified during prerender rather than storing additional NativeArrays. In contrast, the `PoolInstanceManager` supports `NativeArrays` for positions, rotations, and scales, allowing easy adjustments outside the Job System.

## Class Summaries

### SingleInstanceManager

Minimal boilerplate for rendering a single mesh.

### PoolInstanceManager

- Manages position, rotation, scale.
- Supports adding/removing points.
- Works with a single mesh.

### DynamicInstanceManager

Similar to PoolInstanceManager, but optimized for dynamic updates.

### MultiInstanceManager

Handles multiple meshes with position, rotation, and scale data.

### LODInstanceManager

- Uses `MultiInstanceManager` as base
- Adds distance-based mesh selection for LOD.

## Mesh Set

The `InstanceMeshSet` is a `ScriptableObject` used by the instance managers. It contains an array of `InstanceMesh`, where you can specify the mesh, material, and rendering options. You can create a new instance mesh set by right-clicking in the project window and selecting `Laio/Instance Mesh Set`.

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
For single mesh managers, the mesh at index `0` will be used.

## Order of execution

The process starts with `Setup()`, which sets up the camera and calls Allocation(). Note that `InstanceManagerBase.cs` does not automatically call `Allocate()` in `Setup()` it is the responsibility of derived classes to do so.

`Allocatate(bool)` handles the allocation of the `NativeArray`s needed by the manager. Cleanup is handled in Unity's `OnDestroy()` method, invoking `Deallocate()`. If you override `Allocate()` and plan to allocate more `NativeArray`s, pass false when calling `base.Allocate()` to prevent `FinishAllocation()` from being invoked prematurely. Be sure to add the call at the end of your override.

```csharp
if (finishAllocation)
    FinishAllocation();
```

After allocation, `PostAllocation()` is called to initialize any necessary data.

During the update loop, `PreRender()` is called to update data as needed, followed by `Render()`.

If you override `PreRender()`, ensure that `base.PreRender(false)` is passed false. Check if finishPreRender should be true. If so, call `FinishPreRender()`.

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

`InstanceManagerBase.cs` includes performance tracking constants. If you don’t need this functionality, they can be removed along with the `OnGUI()` method. 

:::note
it is all wrapped inside a UNITY_EDITOR, so it will not show up in builds
:::

```csharp
//Constants
public const KeyCode DISPLAY_PERFORMANCE_HOTKEY = KeyCode.Equals;
public const bool DEFAULT_PERFORMANCE_ON = true;
```

## Instance Manager Base

Overridable methods in the base class include:

### Public methods

```csharp
public virtual void Setup(int instances, Camera cam)
```

```csharp
public virtual void Setup(int instances)
```

### Protected methods

```csharp
protected virtual void Allocate(bool finishAllocation = true)
```

```csharp
protected virtual void PostAllocation()
```

```csharp
protected virtual void Deallocate()
```

```csharp
protected virtual void PreRender(bool finishPreRender= true)
```

```csharp
protected virtual void Render()
```

## Single Instance Manager

The `SingleInstanceManager` is a lightweight implementation for rendering a single mesh. It uses a `NativeArray<Matrix4x4>` to manage instance data. To start, override `PostAllocation()` and initialize the `_matrixData` array:

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


The struct `PoolInstanceData` is used to couple data related to a single instance together. Contains position, rotation, scale, along with the index in the `NativeArray` and whether it should be rendered. The `doRender` flag acts as whether it exists yet, if you try and add a point, it will go through the array of `PoolInstanceData` and find the first instance where `doRender = false` and override it.

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

The PoolInstanceManager has 4 jobs. `UpdateMatrixJob`, `UpdatePointsJob`, `AddPointsJob`, `RemovePointsJob`. Whenever you call `UpdatePointsJob`, `AddPointsJob` or `RemovePointsJob` the job will be executed immediately, therefore it is best to make all of the changes in batches rather then calling it many times. These changes get stored inside the `NativeArray<PoolInstanceData>` and the flag `doPreRender` is flagged, as changes have been detected. Prerender takes care of the `UpdateMatrixJob` when it will go through the `NativeArray<PoolInstanceData>` and populate the matrix data to be passed into render. The entire array will not always be used, therefore it also needs to track the length of useable data in the matrix array, which is the purpose of `NativeArray<int> _matrixLength`. It is a `NativeArray` to be passed to the jobs system with only the length of one. 

### Public methods

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

## Dynamic Instance Manager

Has a NativeArray for positions, rotations, and scales. Runs `UpdateMatrixJob` every frame to update the matrix data to match the data inside of the `NativeArray` of positions, rotations and scale. Has public methods for setting the data, however, it is recommended that if you are updating many at once it is best to use a job. 

### Public Methods

```csharp
public void SetData(int index, float3 position, quaternion rotation, float3 scale)
```
```csharp
public void SetPosition(int index, float3 position)
```
```csharp
public void SetRotation(int index, Quaternion rotation)
```
```csharp
public void SetScale(int index, float3 scale)
```

## Multi Instance Manager

Instance manager that allows multiple different meshes to be used. Not as performant as writing multiple managers, however, having the centeralized data makes it much easier to use.

When allocating, the `NativeArray` for `MatrixData`, it will be the size of `instances * meshes`. When rendering, it gets subarrays from `MatrixData` for grouping the different meshes. 

![img alt](/img/Example1.png)

:::warning
Above MatrixData, `meshGroupLength` is referred to as `matrixLength`
:::

There is a `NativeArray` for position, rotation and scale which is represented as Data and on the individual mesh case, M1, M2, M3 and M4. There is also a `NativeArray` of byte which is `_meshGroup`, this represents which mesh this data belongs to. `M1=_meshGroup[0]`, `M2=_meshGroup[1]`, `M3=_meshGroup[2]`, etc. Based on the diagram there are 3 different meshes to choose from, Cube, Capsule and Sphere. As such, there needs to be 12 elements to `_matrixData`.

![img alt](/img/Example2.png)

This is what the rendering code looks like and how it gets the sub array.

```csharp
for (int i = 0; i < MeshesCount; i++)
{
    if (_matrixLength[i] == 0)
        continue;

    Graphics.RenderMeshInstanced(RenderParams[i],
        Meshes[i].mesh,
        Meshes[i].submeshIndex,
        _matrixData.GetSubArray(i * AvailableInstances /*Start*/, _matrixLength[i]/*Length*/)
        );
}
```

This is the code that updates the matrix data.

```csharp
[BurstCompile]
protected struct UpdateMatrixJob : IJob
{
    public NativeArray<int> meshGroupsLength;
    public NativeArray<Matrix4x4> matrixData;

    [ReadOnly] public NativeArray<byte> meshGroup;

    [ReadOnly] public NativeArray<float3> positions;
    [ReadOnly] public NativeArray<Quaternion> rotations;
    [ReadOnly] public NativeArray<float3> scales;

    [BurstCompile]
    public void Execute()
    {
        //Reset all lengths to 0
        for (int i = 0; i < meshGroupsLength.Length; i++)
            meshGroupsLength[i] = 0;

        //Loop through all indexes
        for (int i = 0; i < positions.Length; i++)
        {
            //Update position data. Multiply the total positions by meshGroup to get the correct offset, then use the meshGroupsLength to set the next element in the sequence.
            matrixData[positions.Length * meshGroup[i] + meshGroupsLength[meshGroup[i]]] = Matrix4x4.TRS(positions[i], rotations[i], scales[i]);

            //Increment the length of meshGroups
            meshGroupsLength[meshGroup[i]]++;
        }
    }
}
```

## LOD Instance Manager

`LODInstance` manager inherits from `DynamicInstanceManager` to manage switching the meshes. This simply changes the `_meshGroup` based on distance camera. New inspector property for the render distance. An array of floats, must be the same length as meshes in manager. 
