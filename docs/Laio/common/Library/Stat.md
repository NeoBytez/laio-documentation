# Stat

## Overview

A generic stat implementation, allow a float to regenerate, drain, have a min and max. Perfect for quick interations and prototyping

## Constructors

```csharp
public Stat(StatData statData)
```
```csharp
public Stat(float current, float maximum, float regenerateRate, float drainRate, float min = 0)
```

## Events

```csharp
public onStatEmpty;
```
```csharp
public onStatFull;
```
```csharp
public onStatUpdate;
```

## Public Methods

```csharp
public StatData GetStatData()
```
```csharp
public virtual void Drain()
```
```csharp
public virtual void Adjust(float amount)
```
```csharp
public virtual void Regenerate()
```

## Stat Data

The stat data is a container to store stat data in. 
``` csharp
public struct StatData
{
    public float current;
    public float minimum;
    public float maximum;
    public float regenerateRate;
    public float drainRate;

    public StatData(float current, float minimum, float maximum, float regenerateRate, float drainRate)
    {
        this.current = current;
        this.minimum = minimum;
        this.maximum = maximum;
        this.regenerateRate = regenerateRate;
        this.drainRate = drainRate;
    }
}
```

## Example

A basic example of this would be using it for health.

``` csharp

//Set stat data inside inspector
[SerializedField] private StatData _healthData;

private Stat _health;

private void Awake()
{
    //Load stat based on stat data on awake
    _health = new StatData(_healthData);

    //Assign delegates
    _health.onEmpty += OnDeath;
    _health.onUpdate += UIManager.HealthBarUpdate;
}

private void OnDeath() {}

private void Update()
{
    //Health regeneration
    _health.Regenerate();
}

public void OnTakeDamage(float damage) => _health.Adjust(-damage);

```