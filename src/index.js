import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { App } from './ui/App'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);
