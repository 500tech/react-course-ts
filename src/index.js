import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';
import { TodosProvider } from 'providers/Todos';
import store from './state';
import './index.css';

window.store = store;

ReactDOM.render(
  <Router>
    <TodosProvider>
      <App username="Foo" />
    </TodosProvider>
  </Router>,
  document.getElementById('root')
);
