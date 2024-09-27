# EArray

## Description

The EArray object allows you to create an array of data mapped to an enum. Supports any data type and enums.

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
[SerializeField] private EArray<CustomEnum, int> _myEArray;
```

To get a value from EArray, simply pass the enum value as an int into the index of the array.

``` cs
int myValue = _eArray[(int)CustomEnum.EnumVal1];
```

