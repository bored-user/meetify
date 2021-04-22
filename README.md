# meetify

This is the source code for the Meetify browser extension. It automatically adds the `?authuser=1` query string to the URL, switching to school email.

### Setting `authuser`

In order to set a custom `authuser` key, one just needs to open the inspection tool (`F12` key or right mouse click > Inspect), head on to the console tab (on the upper right corner) and input:
```js
localStorage['MEETIFY_AUTHUSER'] = 'YOUR_DESIRED_AUTHUSER';
```

PS.: The default `authuser` (used if the `localStorage` key isn't set) is `1`. That means that if your institution account is on "number 1 slot", you don't need to follow the steps above if you don't want to.<br><br>

Note that the extension uses [jQuery 3.5.1 slim version](https://code.jquery.com/jquery-3.5.1.slim.min.js).

Feel free to open [issues](https://github.com/bored-user/meetify/issues) and [pull requests](https://github.com/bored-user/meetify/pulls). All help is welcome.
