import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { App } from 'components/App';
import { Theme } from 'providers/Theme';
import { TodosProvider } from 'providers/Todos';
import store from 'state';
import 'index.css';

ReactDOM.render(
  <Router>
    <StoreProvider store={store}>
      <Theme>
        <TodosProvider>
          <App />
        </TodosProvider>
      </Theme>
    </StoreProvider>
  </Router>,
  document.getElementById('root')
);
