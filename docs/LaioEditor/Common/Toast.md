# Toast

## Overview

An editor toast

## Static Methods

```csharp
public static void ShowToast(ToastContent content)
```

## Example

```csharp
public void ShowToast()
{
    // Create our toast content
    ToastContent content = new ToastContent(
        "Name", // Toast name
        "Please input your name", // Toast description
        new ToastInput[] { new ToastInput("First Name"), new ToastInput("Last Name")}, // Toast inputs
        new ToastButton[] { new ToastButton("Cancel"), new ToastButton("Confirm") }   // Toast buttons
        );

    //Subscribe to toast callback
    Toast.onToastSelection += OnToastSelection;

    // Show the toast
    Toast.ShowToast(content);

}

//Toast callback
private void OnToastSelection(string[] values, int button)
{
    // button == 0 | Cancel
    // button == 1 | Confirm

    //Unsubscribe from toast selection
    Toast.onToastSelection -= OnToastSelection;
}
```

![img](/img/ToastPreview.png)