# SceneLoading

## Overview

Static class to handle loading screens in unity. Use delegates to get information on changes, and simply call LoadScene.
 
When loading the scene, there will be a couple frames where the scene is loaded but the screen does not disable. This is to ensure that the progress bar will always fill up, even if it requires extra time after the scene is done loading.

## Events

``` csharp
public static onProgressUpdate
```

``` csharp
public static onLoadingScreenVisibilityChange
```

``` csharp
public static onLoadingFinished
```

## Static Methods

``` csharp
public static void LoadScene(int buildIndex)
```

``` csharp
public static void LoadScene(string sceneName)
```

``` csharp
public static void LoadScene(AsyncOperation loadSceneOperation)
```

## Example

Using the static class for loading scene, all that needs to be done is the visual implementation. Create a script that can manage that, by subscribing to the events.

``` csharp showLineNumbers
// Loading screen UI element that uses the static class SceneLoading
public class LoadingScreen : MonoBehaviour
{
    //Loading screen parent object
    [SerializedField] private GameObject _loadingScreen;
    //Scene loading progress bar
    [SerializedField] private Slider _progress;

    private void Awake()
    {
        //Assign delegates on awake
        SceneLoading.onProgressUpdate += OnProgressUpdate;
        SceneLoading.onLoadingScreenVisibilityChange += OnLoadingScreenVisibilityChange;
        SceneLoading.onLoadingFinished += OnLoadingFinished;
    }

    private void OnDestroy()
    {
        //Make sure to remove delegate assignments when object is destroyed
        SceneLoading.onProgressUpdate += OnProgressUpdate;
        SceneLoading.onLoadingScreenVisibilityChange += OnLoadingScreenVisibilityChange;
        SceneLoading.onLoadingFinished += OnLoadingFinished;
    }

    // Callbacks from SceneLoading

    private void OnProgressUpdate(float progress) => _progress.vale = progress;

    private void OnLoadingScreenVisibilityChange(bool isVisible) => _loadingScreen.SetActive(isVisible);

    private void OnLoadingFinished() => Debug.Log("Loading has been completed!");

}
```