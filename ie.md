# Usage with Internet Explorer

## IE < 9

Since react v15, IE < 9 is not suported at all. The reason being that IE of those version is not ES5 compliant. While you may transpile your own code to run on IE8 (via babel ,as previously discussed), react in itself has been transpiled for ES5.

## IE >= 9

React requires many built-in global features of ES2015+. These features can't just be "transpiled in". However, those features _can_ be polyfilled.
The polyfills needed are:

- `@babel/polyfill` for ES2015+ features such as `Map`, `Set` and `Symbol`.
- `raf` for the `requestAnimationFrame` API.

The usage should look something like this:

```jsx
// index.js
import '@babel/polyfill';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
