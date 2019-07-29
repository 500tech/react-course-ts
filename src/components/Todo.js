import React from 'react';
import { NOOP } from '../utils';

export function Todo({ todo, onToggleTodo = NOOP, onDeleteTodo = NOOP }) {
  const style = todo.completed ? { textDecoration: 'line-through' } : {};
  return (
    <li
      style={style}
      onClick={e => {
        if (e.ctrlKey || e.metaKey) {
          return onDeleteTodo(todo);
        }
        onToggleTodo(todo);
      }}
    >
      {todo.title}
    </li>
  );
}
