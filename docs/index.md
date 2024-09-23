## Code Annotation Examples

### Codeblocks

Some `code` goes here.

### Plain codeblock

A plain codeblock:

``` csharp
/Test
//Test
///Test
a/*test*/a
if(this) {return null;}
Console.WriteLine("Fenced code blocks ftw!");
```

``` { .csharp .copy }
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

#### Code for a specific language

Some more code with the `py` at the start:

``` csharp
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

``` csharp
import tensorflow as tf
def whatever()
```

#### With a title

``` csharp title="bubble_sort.py"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

#### With line numbers

``` csharp linenums="1"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

#### Highlighting lines

``` csharp hl_lines="2 3"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```
