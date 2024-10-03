# EArray

## Overview

The EArray object allows you to create an array of data mapped to an enum. Supports any data type and enums. 

## Restrictions

The only restriction to this, is you cannot set the value of the enums, as it must be cast to an int.
``` csharp
public enum CustomEnum : int
{
    EnumVal1,
    EnumVal2,
    // This will error
    EnumVal3 = 10,
}
```

## Examples

Creating a custom enum to use an EArray with

``` csharp 
public enum CustomEnum
{
    EnumVal1,
    EnumVal2,
    EnumVal3,
    EnumVal4,
    EnumVal5,
}
```

Declaration

``` cs
[SerializeField] private EArray<CustomEnum, int> _myEArray = new EArray<CustomEnum, int>();
```

To get a value from EArray, simply pass the enum value as an int into the index of the array.

``` cs
int myValue = _myEArray[(int)CustomEnum.EnumVal1];
```

