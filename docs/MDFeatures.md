---
title: My Doc Title
more_data:
  - Can be provided
  - as: objects
    or: arrays
---

### Code Block

```csharp title="/src/components/HelloCodeTitle.cs"
public string[] GetInput()
{
    string[] returnValue = new string[input.Length];
    for (int i = 0; i < input.Length; i++)
    {
        returnValue[i] = input[i].Value;
    }
    return returnValue;
}
```

<details>
<summary>Click to expand</summary>

This is the content of the collapsible section. You can include any Markdown-formatted text, lists, or code here.

</details>

### Line numbering

```csharp
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

```jsx {1,4-6,11} showLineNumbers
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```

### Text

Hello world message with some **bold** text, some _italic_ text, and a [link](/)

### Image

![img alt](/img/docusaurus.png)

### Quotes

> Easy to maintain open source documentation websites.
>
> — Docusaurus

### Details element example

<details>
  <summary>Toggle me!</summary>

  This is the detailed content

  ```js
  console.log("Markdown features including the code block are available");
  ```

  You can use Markdown here including **bold** and _italic_ text, and [inline link](https://docusaurus.io)
  <details>
    <summary>Nested toggle! Some surprise inside...</summary>

    😲😲😲😲😲
  </details>
</details>