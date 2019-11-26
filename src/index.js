import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { App } from 'ui/ecosystem';

ReactDOM.render(
  <Router>
    <App titleColor="red"></App>
  </Router>,
  document.querySelector('#root')
);
