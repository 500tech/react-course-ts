import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './components/App';
import store from './state';

//feedback: https://docs.google.com/forms/d/e/1FAIpQLScWBhMSw3iC7Js_zoES3g2av8ANkboybMo6yi6enxZqJnCHwg/viewform
/**
- create all todos actions as redux action (consts, action creators)
- create todos reducer for redux and use it
- remove all internal state references to todos (App, context)
- connect Todos page with redux
- make sure nothing is broken :)
 */

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
// import './flux';
