# Extensions

### Vector3

``` cs
public static void NormalizeIfNeeded(this Vector3 vector)
```

``` cs
public static Vector3 RotateAround(this Vector3 point, Vector3 pivot, Quaternion rotation)
```

### Transform

``` cs
public static void LookInDirection(this Transform transform, Vector3 movementDirection)
```

``` cs
public static Vector3 GetDirection(this Transform transform, Vector3 target)
```

``` cs
public static void SetPositionX(this Transform transform, float xPosition)
```

``` cs
public static void SetPositionY(this Transform transform, float yPosition)
```

``` cs
public static void SetPositionZ(this Transform transform, float zPosition)
```

``` cs
public static void DestroyAllChildrenImmediate(this Transform transform)
```

``` cs
public static void DestroyAllChildren(this Transform transform)
```

``` cs
public static void MoveChildren(this Transform transform, Transform parent)
```

``` cs
public static List<GameObject> GetAllChildren(this Transform transform)
```

### GameObject 

``` cs
public static T AddChild<T>(this GameObject parent) where T : Component
```

``` cs
public static T AddChild<T>(this GameObject parent, string name) where T : Component
```

``` cs
public static GameObject AddChild(this GameObject parent, GameObject child, bool worldPositionStays = false)
```

``` cs
public static GameObject AddChild(this GameObject parent, params Type[] components)
```

``` cs
public static GameObject AddChild(this GameObject parent, string name, params Type[] components)
```

### IList

``` cs
public static T Rand<T>(this IList<T> list)
```

``` cs
public static void ShuffleFull<T>(this IList<T> list)
```

``` cs
public static void ShuffleFast<T>(this IList<T> list)
```

``` cs
public static bool ValidIndex<T>(this IList<T> list, int index)
```

``` cs
public static void Swap<T>(this IList<T> list, int indexA, int indexB)
```

### Misc


``` cs
public static Vector3 RandomPointInBounds(this Bounds bounds)
```
