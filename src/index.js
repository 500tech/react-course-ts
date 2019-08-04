import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';
import { TodosProvider } from 'providers/Todos';
import { ThemeNameProvider } from 'providers/ThemeName';
import store from './state';
import './index.css';

window.store = store;

ReactDOM.render(
  <Router>
    <ThemeNameProvider>
      <TodosProvider>
        <App username="Foo" />
      </TodosProvider>
    </ThemeNameProvider>
  </Router>,
  document.getElementById('root')
);
