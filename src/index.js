import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';
import { ReduxBridge } from './components/ReduxBridge';
import { store } from './state';

render(
  <Router>
    <ReduxBridge store={store}>
      <App />
    </ReduxBridge>
  </Router>,
  document.getElementById('root')
);
