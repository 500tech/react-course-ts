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

const INITIAL_TODOS = [
  { $id: uuid(), text: 'This is todo #1', done: true },
  { $id: uuid(), text: 'This is todo #2', done: false },
  { $id: uuid(), text: 'This is todo #3', done: false },
  { $id: uuid(), text: 'This is todo #4', done: false },
  { $id: uuid(), text: 'This is todo #5', done: false },
];

export function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const toggleTodo = idx =>
    setTodos(
      produce(todos, draft => {
        draft[idx].done = !draft[idx].done;
      })
    );
  const onAddTodo = text =>
    setTodos(
      produce(todos, draft => {
        const todo = { text, done: false, $id: uuid() };
        draft.push(todo);
      })
    );
  const onRemoveTodo = idx =>
    setTodos(
      produce(todos, draft => {
        draft.splice(idx, 1);
      })
    );
  return (
    <Container>
      <Greeting name="foobar" />
      <AddTodo onAddTodo={onAddTodo} focus={false} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={onRemoveTodo}
      />
    </Container>
  );
}
