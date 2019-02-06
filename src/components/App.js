import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import produce from 'immer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Greeting } from './Greeting';
import { Todos } from '../pages/Todos';
import { Home } from '../pages/Home';

const Container = styled.div`
  border: 1px solid lightblue;
`;

const INITIAL_STATE = [
  { $id: uuid(), text: 'This is todo #1', done: true },
  { $id: uuid(), text: 'This is todo #2', done: false },
  { $id: uuid(), text: 'This is todo #3', done: false },
  { $id: uuid(), text: 'This is todo #4', done: false },
  { $id: uuid(), text: 'This is todo #5', done: false },
];

const getTodo = text => ({ text, done: false, $id: uuid() });

export function App() {
  const [todos, setTodos] = useState(INITIAL_STATE);
  const toggleTodo = todoIndex =>
    setTodos(
      produce(todos, draftState => {
        draftState[todoIndex].done = !draftState[todoIndex].done;
      })
    );
  const onAddTodo = text =>
    setTodos(
      produce(todos, draftState => {
        draftState.push(getTodo(text));
      })
    );
  return (
    <Router>
      <Container>
        <Greeting name="foobar" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/todos"
            render={() => (
              <Todos
                todos={todos}
                onAddTodo={onAddTodo}
                toggleTodo={toggleTodo}
              />
            )}
          />
        </Switch>
      </Container>
    </Router>
  );
}
