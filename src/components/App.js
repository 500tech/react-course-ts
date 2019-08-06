import React from 'react';
import uuid from 'uuid';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { TodoAdder } from './TodoAdder';
import { TodoList } from './TodoList';
import { PageNotFound } from './PageNotFound';
import { AddressBar } from './AddressBar';
import { Home } from './Home';
import { useTodosService } from 'services/todos';
import { useThemeService } from 'services/theme'

const Container = styled.div`
  background-color: ${props => props.theme.palette.bgcolor};
  font-size: 18px;
`;

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
  const { todos, removeTodo, toggleTodo, addTodo } = useTodosService([
    { id: uuid(), text: 'Learn Hebrew', done: false },
    { id: uuid(), text: 'Order lunch', done: true },
  ]);
  const { toggleTheme } = useThemeService();

  return (
    <Container onClick={toggleTheme}>
      <AddressBar />
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
    </Container>
  );
}
