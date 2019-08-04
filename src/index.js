import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';
import store from './state';
import './index.css';

window.store = store;

ReactDOM.render(
  <Router>
    <App username="Foo" />
  </Router>,
  document.getElementById('root')
);