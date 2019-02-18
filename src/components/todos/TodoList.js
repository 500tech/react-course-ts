import React from 'react';
import { Todo } from './Todo';

export const TodoList = ({ todos, toggleTodo }) => (
  <div>
    {todos.map(todo => (
      <Todo todo={todo} toggleTodo={toggleTodo} key={todo.id} />
    ))}
  </div>
);
