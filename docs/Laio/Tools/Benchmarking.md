# Benchmarking

## Overview

This can help you quickly test a method to see how hard it is to run. It is intended to give many iterations 

## Static Properties

```csharp
public static float RawFPS
```
```csharp
public static float FPS
```

## Static Methods

```csharp
public static string GetFPS(float secondsToUpate, uint decimalPlaces = 0)
```
```csharp
public static void RunAction(Action action)
```
```csharp
public static void RunAction(Action action, string name)
```
```csharp
public static void RunAction(Action action, string name, string description)
```
```csharp
public static void RunAction(Action action, int iterations)
```
```csharp
public static void RunAction(Action action, int iterations, string name)
```
```csharp
public static void RunAction(Action action, int iterations, string name, string description)
```

## Example

```csharp
public void Start() => Benchmarking.RunAction(MathHeavyFunction, 100000, "MathHeavyFunction"); 

public void MathHeavyFunction()
{
    float j;
    for (int i = 0; i < 100000000; i++)
        j = Mathf.Pow(Mathf.Sqrt(i), 2);
}

```
Example output

```
[Benchmark] (Iterations: 1)  MathHeavyFunction finished. Took 70ms (0.070s) to run.
```