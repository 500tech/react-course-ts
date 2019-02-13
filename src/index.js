import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { ReduxBridge } from './components/ReduxBridge';
import { store } from './state';

ReactDOM.render(
  <ReduxBridge store={store}>
    <App />
  </ReduxBridge>,
  document.getElementById('root')
);
