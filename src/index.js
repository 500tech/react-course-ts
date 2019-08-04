import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from './components/App';
import { Theme } from 'providers/Theme';
import store from './state';
import './index.css';

ReactDOM.render(
  <Router>
    <ReduxProvider store={store}>
      <Theme>
        <App username="Foo" />
      </Theme>
    </ReduxProvider>
  </Router>,
  document.getElementById('root')
);
