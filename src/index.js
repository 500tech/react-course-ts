import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from './components/App';
import { TodosProvider } from 'providers/Todos';
import { Theme } from 'providers/Theme';
import store from './state';
import './index.css';

window.store = store;

ReactDOM.render(
  <Router>
    <ReduxProvider store={store}>
      <TodosProvider>
        <Theme>
          <App username="Foo" />
        </Theme>
      </TodosProvider>
    </ReduxProvider>
  </Router>,
  document.getElementById('root')
);
