document.addEventListener('DOMContentLoaded', function () {
  console.log('Checking if Prism is defined:', window.Prism); // Check if Prism is available globally

  if (typeof Prism !== 'undefined') {
    window.Prism = Prism;
  } else {
    return;
  }

  const classTypePattern = {
    pattern: /\b(Selector|Benchmarking|EArray|Weights|Math|Mathf|Matrix4x4|Graphics|Transform|GameObject|CustomEnum|Rigidbody|MonoBehaviour|SerializedField|ContextMenu|ReadOnly|ArgumentException|Enum|Debug|StatData|Stamina)\b/,
    alias: 'class-name'
  };

  const structTypePattern = {
    pattern: /\b(Vector3|Quaternion|NativeArray|float3)\b/,
    alias: 'class-name'
  };

  const enumTypePattern = {
      pattern: /\b(CharacterType|PrimitiveType|KeyCode|ShadowCastingMode)\b/,
      alias: 'class-name'
  };

  const genericTypePattern = {
    pattern: /\b(T|T|TBullet|TSurface)\b/,
    alias: 'class-name'
  };

  //======================================== Struct ========================================//

  Prism.languages.insertBefore('csharp', 'class-name', {
    'unity-type-struct': structTypePattern
  });

  //======================================== Class ========================================//

  // Insert before both 'class-name' and 'constructor-invocation' 
  Prism.languages.insertBefore('csharp', 'class-name', {
    'unity-type-class': classTypePattern
  });

  // Insert before both 'class-name' and 'constructor-invocation' 
  Prism.languages.insertBefore('csharp', 'attribute', {
    'unity-type-class': classTypePattern
  });

  // Re-apply the same rule for 'constructor-invocation'
  Prism.languages.insertBefore('csharp', 'constructor-invocation', {
    'unity-type-class': classTypePattern
  });

  // Re-apply the same rule for 'constructor-invocation'
  Prism.languages.insertBefore('csharp', 'plain', {
    'unity-type-class': classTypePattern
  });

  // Re-apply the same rule for 'constructor-invocation'
  Prism.languages.insertBefore('csharp', 'return-type', {
    'unity-type-class': classTypePattern
  });

  //======================================== Enum  ========================================//

  Prism.languages.insertBefore('csharp', 'class-name', {
    'unity-type-enum': enumTypePattern
  });
  Prism.languages.insertBefore('csharp', 'return-type', {
    'unity-type-enum': enumTypePattern
  });

  //======================================== Generic ========================================//

  Prism.languages.insertBefore('csharp', 'plain', {
    'generic': genericTypePattern
  });

  Prism.languages.insertBefore('csharp', 'keyword', {
    'generic': genericTypePattern
  });

  Prism.languages.insertBefore('csharp', 'return-type', {
    'generic': genericTypePattern
  });

  Prism.languages.insertBefore('csharp', 'class-name', {
    'generic': genericTypePattern
  });

  console.log("Added code insert");

});