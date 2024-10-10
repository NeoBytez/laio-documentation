
## Overview

Allows single selection from a list of items. Provides methods to navigation the selection, inlcuding wrapping around and events for when the value changes

## Constructors 
```csharp
public Selector()
```
```csharp
public Selector(params T[] options)
```
```csharp
public Selector(IList<T> options)
```

## Events

```csharp
public delegate void OnSelectionUpdate(T deselected, T selected);
```
```csharp
public delegate void OnSelectionIndexUpdate(T deselected, T selected);
```

## Properties


```csharp
public int SelectedIndex { get; private set; }
```
```csharp
public T SelectedValue { get; private set; }
```
## Methods

```csharp
public void Increment()
```
```csharp
public void Decrement()
```
```csharp
public bool TrySelectIndex(int index)
```
```csharp
public bool TrySelectValue(T value)
```
```csharp
public void AddRange(params T[] options)
```
```csharp
public void Add(T newOption)
```
## Example

```csharp
public enum CharacterType
{
    Tank,
    Support,
    Marksman,
    Assassin
}

public class CharacterSelect
{
    private Selector<CharacterType> _selector;

    [SerializeField] private Button _next;
    [SerializeField] private Button _previous;

    public void Start()
    {
        //Initialize the selector with all of the values of CharacterType
        _selector = new Selector<CharacterType>(Helper.EnumValues<CharacterType>());

        //Assign next and previous buttons to scroll through characters
        _next.onClick.AddListener(() => _p.Increment());
        _previous.onClick.AddListener(() => _p.Decrement());

        //Whenever a new value is selected, update preview character
        _selector.onSelectionUpdated += UIManager.Instance.UpdatePreviewCharacter();
    }


}```