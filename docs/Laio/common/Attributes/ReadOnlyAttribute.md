# Readonly Attribute

## Overview

The readonly attribute allows you to show variables inside of the inspector but prevent them from being adjusted. 

:::note
Switching inspector to debug view overrides this attribute allowing you to adjust the value
:::

## Example

``` csharp
[SerializedField, ReadOnly] private float _currentHealth = 100;
```