import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';
import './index.css';

ReactDOM.render(
  <Router>
    <App username="Foo" />
  </Router>,
  document.getElementById('root')
);