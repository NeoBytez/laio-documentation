# Toast Content

Contains all of the data related to a toast which can be passed to [Toast.cs](/) to show. This toast allows you to give multiple inputs, such as textfields, along with multiple buttons. ToastContent requires at a minimum `1` button. 

## Constructors

```csharp
public ToastContent(string header, string description, ToastInput[] input, ToastButton[] buttons);
```

## ToastInput

Toast input

### Constructor
```csharp
public ToastInput(string name)
```
```csharp
public ToastInput(string name, string defaultValue)
```

## ToastButton

Toast button

### Constructor
```csharp
public ToastButton(string name)
```