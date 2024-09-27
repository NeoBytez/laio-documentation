# Helper

## Description

Test
<details>
<summary>Click to expand</summary>

This is the content of the collapsible section. You can include any Markdown-formatted text, lists, or code here.

</details>
Test

## Test code for syntax highlighting

``` cs
public EArray<PrimitiveType, int> primitives2 = new EArray<PrimitiveType, int>();
[SerializeField] private EArray<PrimitiveType, int> primitives = new EArray<PrimitiveType, int>();
[ContextMenu("Run")]
public string[] GetInput()
{
    string[] returnValue = new string[input.Length];
    for (int i = 0; i < input.Length; i++)
    {
        returnValue[i] = input[i].Value;
    }
    return returnValue;
}
```

``` cs
public static string RandomString(int length)
{
    const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return new string(Enumerable.Repeat(chars, length)
        .Select(s => s[Random.Next(s.Length)]).ToArray());
}

public static T Next<T>(T current) where T : Enum
{
    if (!typeof(T).IsEnum) throw new ArgumentException(String.Format("Argument {0} is not an Enum", typeof(T).FullName));

    T[] Arr = (T[])Enum.GetValues(current.GetType());
    int j = Array.IndexOf<T>(Arr, current) + 1;
    return (Arr.Length == j) ? Arr[0] : Arr[j];
}
```

## Static Properties

``` cs
public static Camera camera;
```

## Static Methods

``` cs
public static bool IsPointerOverUI()
```

``` cs
public static Vector3 IntersectionZ(Vector3 origin, Vector3 direction, float targetZ)
```
``` cs
public static Vector3 IntersectionX(Vector3 origin, Vector3 direction, float targetX)
```
``` cs
public static Vector3 IntersectionY(Vector3 origin, Vector3 direction, float targetY)
```
``` cs
public static T Next<T>(T current) where T : Enum
```
``` cs
public static string RandomString(int length)
```
