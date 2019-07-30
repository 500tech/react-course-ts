import React from 'react';
import { NOOP } from '../utils';

export function Todo({ todo, onToggleTodo = NOOP, onRemoveTodo = NOOP }) {
  const style = { textDecoration: todo.done ? 'line-through' : 'none' };
  return (
    <li
      style={style}
      onClick={() => onToggleTodo(todo)}
      onDoubleClick={() => onRemoveTodo(todo)}
    >
      {todo.text}
    </li>
  );
}
