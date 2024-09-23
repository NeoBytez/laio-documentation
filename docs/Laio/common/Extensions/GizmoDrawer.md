# GizmoDrawer

## Description

Provides additional methods for drawing gizmos

## Static Methods

``` cs
public static void DrawPie(Transform transform, float FOV, float distance, Color? color = null, float thickness = 3)
```

``` cs
public static void DrawBoxCollider(BoxCollider bounds, string label, Color color)
```

``` cs
public static void DrawSolidAndWireSphere(Vector3 location, float radius, Color wire, Color solid)
```

``` cs
public static void DrawSolidAndWireCube(Vector3 location, Vector3 size, Color wire, Color solid)
```

``` cs
public static void DrawQuadraticBezier(Vector3 start, Vector3 end, Vector3 control, Color color, int density = 30)
```

``` cs
public static void DrawLines(IList<Vector3> points, Color color)
```
