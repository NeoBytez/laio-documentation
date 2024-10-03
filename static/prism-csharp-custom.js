document.addEventListener('DOMContentLoaded', function () {
  console.log('Checking if Prism is defined:', window.Prism); // Check if Prism is available globally

  if (typeof Prism !== 'undefined') {
    window.Prism = Prism;
  } else {
    return;
  }

  //======================================== Struct ========================================//

    Prism.languages.insertBefore('csharp', 'class-name', {
      'unity-type-struct': {
        // Add more Unity types if necessary
        pattern: /\b(Vector3|Quaternion)\b/,
        alias: 'class-name'
      }
    });

    //======================================== Class ========================================//

    const unityTypesPattern = {
      pattern: /\b(EArray|Weights|Transform|GameObject|CustomEnum|Rigidbody|MonoBehaviour|SerializedField|ContextMenu|ReadOnly|ArgumentException|Enum|Debug|StatData|Stamina)\b/,
      alias: 'class-name'
    };

    // Insert before both 'class-name' and 'constructor-invocation' 
    Prism.languages.insertBefore('csharp', 'class-name', {
      'unity-type-class': unityTypesPattern
    });

    // Insert before both 'class-name' and 'constructor-invocation' 
    Prism.languages.insertBefore('csharp', 'attribute', {
      'unity-type-class': unityTypesPattern
    });

    // Re-apply the same rule for 'constructor-invocation'
    Prism.languages.insertBefore('csharp', 'constructor-invocation', {
      'unity-type-class': unityTypesPattern
    });

    //======================================== Enum  ========================================//

    Prism.languages.insertBefore('csharp', 'class-name', {
      'unity-type-enum': {
        // Add more Unity types if necessary
        pattern: /\b(PrimitiveType)\b/,
        alias: 'class-name'
      }
    });

    //======================================== Generic ========================================//

    Prism.languages.insertBefore('csharp', 'plain', {
      'generic': {
        // Add more Unity types if necessary
        pattern: /\b(T|T)\b/,
        alias: 'class-name'
      }
    });

    Prism.languages.insertBefore('csharp', 'keyword', {
      'generic': {
        // Add more Unity types if necessary
        pattern: /\b(T|T)\b/,
        alias: 'class-name'
      }
    });

    Prism.languages.insertBefore('csharp', 'class-name', {
      'generic': {
        // Add more Unity types if necessary
        pattern: /\b(T|T)\b/,
        alias: 'class-name'
      }
    });



    console.log("Added code insert");

});