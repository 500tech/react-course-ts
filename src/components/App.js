import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import produce from 'immer';

import { AddTodo } from './AddTodo';
import { Greeting } from './Greeting';
import { TodoList } from './TodoList';

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
    <Container>
      <Greeting name="foobar" />
      <AddTodo onAddTodo={onAddTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </Container>
  );
}
