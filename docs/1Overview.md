---
title: Overview
slug: /
description: Overview
---

## Laio: Logan's All in One

This Unity package aims to provide commonly used tools, methods and systems to speed up the development process.

Has many different types that can drasically speed up development, such as [Stamina](/), [EArray](/), [Stat](/), [ObjectPool](/) along with different systems, such as [Saving](/), [SceneLoading](/), [Script Templates](/LaioEditor/TemplateEditor/) and more!

If you are ready to install the package, check out the [Quick Start](/QuickStart) guide.

## Samples:

All demos will be in the unity universal render pipeline. 

### [Bullet Solver](/Samples/BulletSolver)

The Bullet Solver system is designed to manage bullet behavior in a flexible and scalable way. It handles bullet velocity, collision detection, and interactions with surfaces, offering features like deflection, tumbling, and damage application. The core component, BulletSolver, tracks and processes all active bullets, updating their positions and checking for collisions each frame. Custom solvers can be created by extending the base class, while surfaces add complexity by altering bullet behavior based on defined parameters. The system supports easy customization and expansion, making it suitable for both basic and advanced projectile mechanics.

### [GPUInstancing](/)

The GPU Instancing system focuses on efficiently rendering large numbers of objects in Unity by utilizing the GPU. Using the Unity Jobs system and Burst Compiler to modify the matrix data related to instances for incredible speed. 

You can read about GPU instancing https://docs.unity3d.com/Manual/GPUInstancing.html

Provides useful base classes

- DynamicInstanceManager
- LODInstanceManager
- MultiInstanceManager
- PoolInstanceManager
- SingleInstanceManager

### [Ability system](/)

Coming soon...
