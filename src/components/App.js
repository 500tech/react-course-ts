import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import { TodoAdder } from './TodoAdder';
import { TodoList } from './TodoList';
import { useTodosService } from '../services/todos';

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

  return (
    <div className="container">
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
    </div>
  );
}
