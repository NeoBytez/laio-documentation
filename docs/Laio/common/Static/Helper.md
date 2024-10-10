# Helper

## Overview

Provides commonly used methods

## Static Properties

``` csharp
public static Camera camera;
```

## Static Methods

``` csharp
public static bool IsPointerOverUI()
```

``` csharp
public static Vector3 IntersectionZ(Vector3 origin, Vector3 direction, float targetZ)
```
``` csharp
public static Vector3 IntersectionX(Vector3 origin, Vector3 direction, float targetX)
```
``` csharp
public static Vector3 IntersectionY(Vector3 origin, Vector3 direction, float targetY)
```
``` csharp
public static string RandomString(int length)
```
``` csharp
public static bool HasSaveDirectory(string dir = "/Save")
```
``` csharp
public static Vector3 RandomVector3(bool randomX = true, bool randomY = true, bool randomZ = true)
``` 
``` csharp
public static Vector3 RandomVector3()
``` 
``` csharp
public static Vector2 RandomVector2()
``` 
### Enum
``` csharp
public static T Next<T>(T current) where T : Enum
```
``` csharp
public static T[] EnumValues<T>() where T : Enum
```
``` csharp
public static T RandomEnum<T>() where T : Enum
```
``` csharp
public static T GetEnumAtIndex<T>(int index) where T : Enum
```
``` csharp
public static T RandomEnumExcluding<T>(params T[] Excluding) where T : System.Enum
```
``` csharp
public static T RandomEnumExcluding<T>(T[] cachedValues, params T[] Excluding) where T : System.Enum
```