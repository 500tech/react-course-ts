import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from 'components/App';
import { Theme } from 'providers/Theme';
import { TodosProvider } from 'providers/Todos';
import store from 'state';
import 'index.css';

window.store = store;

ReactDOM.render(
  <Router>
    <Theme>
      <TodosProvider>
        <App />
      </TodosProvider>
    </Theme>
  </Router>,
  document.getElementById('root')
);
