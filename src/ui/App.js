import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { BorderedContainer } from 'ui/common';
import { Header } from 'ui/Header';
import { useTodos } from 'services/todos';
import { useTheme } from 'services/theme';
import { Home } from 'views/Home';
import { Todos } from 'views/Todos';
import { PageNotFound } from 'views/PageNotFound';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const { todos, removeTodo, toggleTodo, addTodo } = useTodos();
  return (
    <ThemeProvider theme={theme}>
      <BorderedContainer>
        <Header toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/todos"
            render={() => {
              return (
                <Todos
                  todos={todos}
                  addTodo={addTodo}
                  toggleTodo={toggleTodo}
                  removeTodo={removeTodo}
                />
              );
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </BorderedContainer>
    </ThemeProvider>
  );
}
