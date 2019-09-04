import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';
import store from 'state';
import { App } from 'ui/App';

window.store = store;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
