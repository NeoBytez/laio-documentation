# Readonly Attribute

## Overview
The readonly attribute allows you to show variables inside the inspector but prevent the user from editing them.

## Example

``` csharp
[SerializedField, ReadOnly] private float _currentHealth = 100;
```