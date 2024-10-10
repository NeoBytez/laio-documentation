---
title: Saving
slug: /Saving
description: Saving
hide_table_of_contents: true
---

# Saving

## Overview

Static way to save objects

## Methods

```csharp
public static void Save(object objectToSave, string name, string path = "/Save/", string extension = ".txt")
```
```csharp
private static object LoadObject(Type type, string name, string path = "/Save/", string extension = ".txt")
```
```csharp
public static T Load<T>(string name, string path = "/Save/", string extension = ".txt")
```

### Scriptable objects

Save and load scriptable objects as a Json.

```csharp
public static void Save(this ScriptableObject objectToSave, string name, string path = "/Save/", string extension = ".txt")
```
```csharp
public static ScriptableObject LoadObject<T>(string name, string path = "/Save/", string extension = ".txt")
```
```csharp 
private static ScriptableObject LoadScriptableObject(Type type, string name, string path = "/Save/", string extension = ".txt")
```
```csharp
public static void Load(this ScriptableObject obj, string name, string path = "/Save/", string extension = ".txt")
```