---
title: Template Editor
hide_table_of_contents: false
---

## Overview

The Template Editor allows you to customize how default scripts are generated, such as specifying the starting methods and using statements, and provides the ability to create custom script templates. To access this tool, navigate to `Tools > Adjust Script Template`. Upon opening the menu, it will create the necessary folder, `Assets/ScriptTemplates`, and provide some starter files:
- 81-C# Script-NewBehaviourScript.cs
- 80-C# Templates__Singleton-NewSingleton.cs
- 80-C# Templates__ScriptableObject-NewScriptableObject.cs

:::warning
Upon creation of folder and files, unity must be restarted to access the templates menu
:::

![alt img](/img/ScriptTemplate.png)

### Naming Convention

The naming convention for templates follows this structure:

[order]-[menu]_[name]-[fileName]

- **Order**: The order in which the item appears in the menu.
- **Menu**: The name of the menu option.
- **Name**: The display name of the option in the menu.
- **FileName**: The default filename when the template is created.

If you'd like to adjust the default script, it can be found in `81-C# Script-NewBehaviourScript.cs`, which does not include the menu name.

### Editing Scripts

On the left-hand side of the Template Editor, you can select the script you'd like to edit.

On the right-hand side, you can use the auto-generation tool to customize what is included in the script, such as `Methods` and `Using` statements. At the top, you can toggle the `Class Comment` option.

Once you've selected all the options you want, click `Generate`. The changes will be reflected in the textbox at the bottom of the editor. You can also manually edit the script directly in the textbox. When you're satisfied with your changes, click `Save` to apply them.

### Creating a New Template

If you'd like to create a new template, follow the same process for editing a script. However, instead of clicking `Save`, click `Create Template`. A prompt will appear, allowing you to specify the details of your new template.

![alt img](/img/CreateTemplate.png)

Fill it out and hit `Create`!



