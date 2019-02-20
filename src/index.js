import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from './components/App';
import { ReduxBridge } from './components/ReduxBridge';
import { store } from './state';

ReactDOM.render(
  <ReduxBridge store={store}>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </ReduxBridge>,
  document.getElementById('root')
);
