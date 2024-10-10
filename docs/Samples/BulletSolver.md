---
title: Bullet Solver
hide_table_of_contents: false
---

## Overview

The Bullet Solver provides a simple solution for managing bullets. It handles bullet velocity, collision detection, surfaces, deflections, and tumbling. The system's base classes offer a solid foundation for creating custom bullet management systems. Additionally, it’s easily expandable to include features like networking, decals, and more.

The core class is `BulletSolver`, which manages all `Bullet` instances. When a new `Bullet` is spawned, it is registered with the `BulletSolver`. Upon destruction, it is removed from the system. Each frame, the `BulletSolver` iterates through all bullets and calculates their displacement. The `CollisionCheck(Vector3 origin, Vector3 displacement)` method is then invoked in each bullet, which performs a raycast to check for collisions and interactions with Surface objects.

- Standard collisions result in the bullet being destroyed.
- Surfaces offer more nuanced behavior, such as deflection, tumbling, or stopping the bullet entirely.

Bullets use the `IDamageable` interface to deal damage.

## Quick Start

Drag and drop both the `BulletSolver` and `SamplePlayer FPS Variant` prefabs found in `Laio/BulletSolver/Prefabs` into the scene.

If using your own player script, when instantiating a bullet, call `bullet.Setup(this)`, where `this` is the instigator.

```csharp
 public void Shoot()
{
    Bullet newBullet = Instantiate(bulletPrefab, transform).GetComponent<Bullet>();
    newBullet.transform.position = transform.position;
    newBullet.Setup(this);
}
```

For damage handling, use the `IDamageable` interface, which provides two methods for taking damage:
```csharp
public abstract void TakeDamage(float damage);
```
```csharp
public abstract void TakeDamage(float damage, object instigator);
```

To set up surfaces, attach the `SimpleSurface` script to any object you want bullets to interact with. Select or create a new surface data to apply to the object. To create a new surface data asset, right-click in the project window and select `Create > Bullets > SimpleSurface`.

## Bullet Solver

The `BulletSolver` is responsible for managing all bullets. It uses a `HashSet<T>` where T is of type `Bullet`, and iterates over this set each frame to call Solve() on each bullet.

To avoid modifying the `HashSet<T>` during iteration, a secondary `HashSet<T>` is used to store bullets that need to be removed. Removal occurs at the start of the next frame.

The solver uses `System.Stopwatch` to track the time it takes to solve all bullets. This feature is enabled by default, and can be accessed from its `TimeToSolveMS` property.

### Creating your own solver

Creating a new solver is simple. Create a new script and inherit from `BulletSolver`, using your custom bullet class as the type parameter. Then, override the `Solve()` method to add your custom logic.

```csharp
public class MySolver : BulletSolver<MyBullet>
{
    public override void Solve(MyBullet bullet)
    {
        // Custom solve logic
    }
}
```


#### Properties

```csharp
protected HashSet<TBullet> BulletHashSet { get; private set; }
```

```csharp
protected float BulletCount { get; }
```

```csharp
protected float TimeToSolveMS { get; }
```

#### Methods

```csharp
public void RegisterBullet(TBullet bullet)
```

```csharp
public void DisposeBullet(TBullet bullet)
```

## Bullet

The `Bullet` class is the base class for all bullets and their interactions with the `BulletSolver`.

The `Setup()` method registers the bullet, sets the `Instigator`, and records the start time. 

:::note
If the `Instigator` is not required, it’s recommended to call `Setup()` in `Start()` on the bullet.
:::

The `CollisionCheck()` method is responsible for detecting collisions. It receives the bullet's origin and displacement for the current frame and performs a raycast with those values.

```csharp
if (Physics.Raycast(new Ray(origin, displacement), out RaycastHit hit, displacement.magnitude, layerMask.value))
{
    //Collision check
}
```

#### Public properties

```csharp
public bool IsSetup { get; private set; }
```

```csharp
public float Lifetime { get; private set; }
```

```csharp
public object Instigator  { get; private set; }
```

#### Public methods

```csharp
public virtual void Setup(object instigator)
```

```csharp
public abstract float GetDamage()
```

```csharp
public abstract void CollisionCheck(Vector3 origin, Vector3 direction)
```

```csharp
public abstract void Dispose()
```

```csharp
public abstract void Register()
```

## Damageable

The `IDamageable` interface allows bullets to apply damage to game objects. It provides two method signatures:

```csharp
public abstract void TakeDamage(float damage)
```

```csharp
public abstract void TakeDamage(float damage, object Instigator)
```

If a bullet has an `Instigator`, the method with the `Instigator` argument will be called. Otherwise, the single-parameter method will be used.

## Surfaces

The `Surface<T>` abstract class defines the `OnImpact()` method, which is called when a bullet hits the surface.

```csharp
/// <summary>
/// Impact check for bullet hitting surface
/// </summary>
/// <param name="bullet">Bullet data passed in to modify based on surface params</param>
/// <param name="hit">Hit from raycast</param>
/// <returns>Should the bullet be stopped on impact?</returns>
public abstract bool OnImpact(T bullet, RaycastHit hit);
```
:::note
OnImpact() returns a boolean indicating whether the bullet should be stopped.
:::

### SimpleSurface

The SimpleSurface class includes percentage chances for various bullet behaviors:

- `StopChance`: Chance that the bullet will stop on impact.
- `DeflectionChance`: Chance that the bullet will be deflected.
- `TumbleChance`: Chance that the bullet will tumble after impact.

If tumbling occurs, the bullet's forward direction will be modified based on the `TumbleStrength`. Additionally, the surface's `Mass` property acts as a flat reduction to the bullet's speed.