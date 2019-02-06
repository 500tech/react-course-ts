import React from 'react';
import { AddTodo } from '../components/AddTodo';
import { TodoList } from '../components/TodoList';

export function Todos({ todos, onAddTodo, toggleTodo }) {
  return (
    <>
      <AddTodo onAddTodo={onAddTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}
