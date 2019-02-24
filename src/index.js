import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from './components/App';
import { store } from './state';

render(
  <Router>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </Router>,
  document.getElementById('root')
);
