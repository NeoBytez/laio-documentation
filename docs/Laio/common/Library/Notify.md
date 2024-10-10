# Notify

## Overview

A class to wrap around a value to get callbacks when the value changes.

## Events

```csharp
public delegate void OnValueChange(T newValue)
```
```csharp
public delegate void OnValueChangeWithOld(T oldValue, T newValue)
```

## Example

```csharp
public Notify<float> Health;

private void Awake()
{
     Health = new Notify<float>(100)
     // Make the UI update whenever the value of health changes
     Health.onValueChange += UIManager.Instance.OnHealthChange;
}
```