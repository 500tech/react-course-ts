import React, { useState } from 'react';
import uuid from 'uuid';
import { Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { TodoAdder } from './TodoAdder';
import { TodoList } from './TodoList';
import { Home } from './Home';
import { useTodosService } from '../services/todos';
import * as themes from '../theme';

const AlertBox = styled.div`
  background-color: red;
  padding: 10px;
  border-radius: 5px;
  border: 1px dotted violet;
  font-size: 1.5em;

  &:hover {
    visibility: hidden;
  }

  p {
    pointer-events: none;
    user-select: none;
  }
`;

function NoItemsEmptyState() {
  return (
    <AlertBox>
      <p>Oh noes, no items yet! Please create one :)</p>
    </AlertBox>
  );
}

export function App() {
  const [theme, setTheme] = useState(themes.lightTheme);
  const { todos, removeTodo, toggleTodo, addTodo } = useTodosService([
    { id: uuid(), text: 'Learn Hebrew', done: false },
    { id: uuid(), text: 'Order lunch', done: true },
  ]);
  const toggleTheme = () =>
    setTheme(
      theme === themes.lightTheme ? themes.darkTheme : themes.lightTheme
    );

  return (
    <ThemeProvider theme={theme}>
      <div className="container" onClick={toggleTheme}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/todos"
            render={() => (
              <>
                <h1>Todo list</h1>
                <TodoAdder onAddTodo={addTodo} />
                {todos.length ? (
                  <TodoList
                    items={todos}
                    onToggleTodo={toggleTodo}
                    onRemoveTodo={removeTodo}
                  />
                ) : (
                  <NoItemsEmptyState />
                )}
              </>
            )}
          />
          <Route render={() => <p>404</p>} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}
