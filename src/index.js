import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';
import store from 'state';
import { App } from 'ui/App';
import { Theme } from 'ui/Theme';

// window.store = store;

ReactDOM.render(
  <Router>
    <ReduxStoreProvider store={store}>
      <Theme>
        <App />
      </Theme>
    </ReduxStoreProvider>
  </Router>,
  document.getElementById('root')
);
