# Stamina

## Overview

A basic stamina system. Manages regeneration and consumption along with providing a flag for if you are sprinting. `Update(bool attemptingSprint)` handles both consumption and regeneration, so it must be called every frame. You must have more stamina then `requiredStaminaForSprint` to begin sprinting, however, if you are sprinting to can run your stamina down to 0. Provides the ability to try and spend stamina using `bool TrySpend(float cost)`, this can be used for jumping.

## Constructors

``` csharp
public Stamina(float regen, float consumption)
```
``` csharp
public Stamina(float min, float max, float requiredStaminaForSprint, float regenSpeed, float consumptionSpeed)
```

## Methods

``` csharp
public bool TrySpend(float cost)
```
``` csharp
public void SetRegeneration(float regeneration)
```
``` csharp
public void SetConsumption(float consumption)
```
``` csharp
public void Update(bool attemptingSprint)
```
``` csharp
public void ResetStamina()
```
``` csharp
public bool IsSprinting()
```

## Example



``` csharp
// Stamina
[SerializedField] private Stamina _stamina;
[SerializedField] private float _staminaJumpCost;

// Movement speeds
[SerializedField] private float _walkSpeed;
[SerializedField] private float _sprintSpeed;

//Get the correct speed based on whether we are sprinting
public float Speed 
{
    get
    {
        if (_stamina.IsSprinting())
            return speed = _sprintSpeed;
        return speed = _walkSpeed;
    }
}

public void Awake() => _stamina.ResetStamina();

public void Update()
{
    // Get input
    bool trySprint = Input.GetKey(KeyCode.LeftShift);
    bool tryJump = Input.GetKey(KeyCode.Space);

    // Update stamina with whether we are attempting to run
    _stamina.Update(trySprint);

    if(tryJump)
    {
        if(_stamina.TrySpend(_staminaJumpCost))
        {
            // Do jump
        }else
        {
            // Not enough stamina to jump
        }
    }

    //Other movement code:
}
```