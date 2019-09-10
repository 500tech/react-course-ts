import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { BorderedContainer } from 'ui/common';
import { useTodos } from 'services/todos';
import { darkTheme, lightTheme } from 'themes';
import { Home } from 'views/Home';
import { Todos } from 'views/Todos';
import { PageNotFound } from 'views/PageNotFound';

export function App() {
  const [theme, setTheme] = useState(lightTheme);
  const { todos, removeTodo, toggleTodo, addTodo } = useTodos();
  return (
    <ThemeProvider theme={theme}>
      <BorderedContainer>
        <button
          onClick={() =>
            setTheme(theme === lightTheme ? darkTheme : lightTheme)
          }
        >
          Switch theme
        </button>
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
