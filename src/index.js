import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { App } from 'ui/App';

const Router = navigator.userAgent.match(/ie/i) ? HashRouter : BrowserRouter;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
