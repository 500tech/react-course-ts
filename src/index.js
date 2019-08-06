import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { App } from 'components/App';
import { Theme } from 'providers/Theme';
import store from 'state';
import 'index.css';

ReactDOM.render(
  <Router>
    <StoreProvider store={store}>
      <Theme>
        <App />
      </Theme>
    </StoreProvider>
  </Router>,
  document.getElementById('root')
);
