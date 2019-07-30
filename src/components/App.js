import React, { useState } from 'react';
import uuid from 'uuid';
import { Route, Switch, Link, Redirect, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { TodoAdder } from './TodoAdder';
import { TodoList } from './TodoList';
import { PageNotFound } from './PageNotFound';
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

function BaseUrlTitle({ location, todoCount = 0 }) {
  return (
    <div>
      <p>{location.pathname}</p>
      <nav>
        <Link to="/todos">Todos page ({todoCount})</Link>
      </nav>
    </div>
  );
}

const UrlTitle = withRouter(BaseUrlTitle);

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
        <UrlTitle todoCount={todos.length} />
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
                <Route
                  path="/todos/:todoId"
                  render={({ match }) => {
                    const { params } = match;
                    const { todoId } = params;
                    const todo = todos.find(t => t.id === todoId);
                    if (!todo) {
                      return <Redirect to="/todos" />;
                    }
                    return <p>{todo.text}</p>;
                  }}
                />
              </>
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}
