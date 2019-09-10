import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import store from 'state';
import { App } from 'ui/App';

window.store = store;

const Router = navigator.userAgent.match(/ie/i) ? HashRouter : BrowserRouter;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
