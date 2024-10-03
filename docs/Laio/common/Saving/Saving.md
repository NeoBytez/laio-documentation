# Saving

## Overview

Static way to save

## Constructors

``` csharp
public ObjectPool(GameObject prefab)
```

``` csharp
public ObjectPool(GameObject prefab, string name)
```

``` csharp
public ObjectPool(GameObject prefab, string name, int prepopulated)
```

``` csharp
public ObjectPool(GameObject prefab, string name, int prepopulated, bool useParent = true)
```

## Public Methods

``` csharp
public virtual GameObject GetObject(bool isRequestingNew)
```

``` csharp
public virtual void ReturnObject(GameObject gameObject)
```

``` csharp
public virtual void ReturnObjects(IList<GameObject> gameObjects)
```

## Example

