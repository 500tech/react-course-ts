import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import store from 'state';
import { App } from 'ui/App';
import { ThemeProvider } from 'providers/theme';

window.store = store;

const Router = navigator.userAgent.match(/ie/i) ? HashRouter : BrowserRouter;

ReactDOM.render(
  <Router>
    <StoreProvider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </Router>,
  document.getElementById('root')
);
