import React from 'react';

export const Todo = ({ todo, toggleTodo }) => (
  <p
    onClick={() => toggleTodo(todo.id)}
    style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
  >
    {todo.text}
  </p>
);
