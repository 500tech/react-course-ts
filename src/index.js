import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import store from 'state';
import { App } from 'ui/App';
import { ThemeProvider } from 'providers/theme';
import { TodosProvider } from 'providers/todos';

window.store = store;

const Router = navigator.userAgent.match(/ie/i) ? HashRouter : BrowserRouter;

ReactDOM.render(
  <Router>
    <ThemeProvider>
      <TodosProvider>
        <App />
      </TodosProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
