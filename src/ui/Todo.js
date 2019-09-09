import React, { memo } from 'react';
import { NOOP } from 'utils';

export const Todo = memo(function Todo({
  todo,
  onToggleTodo = NOOP,
  onRemoveTodo = NOOP,
}) {
  console.log('rendering:', todo.id);
  const style = { textDecoration: todo.completed ? 'line-through' : 'none' };
  return (
    <li
      style={style}
      onClick={e => {
        if (e.metaKey) {
          onRemoveTodo(todo.id);
        } else {
          onToggleTodo(todo.id);
        }
      }}
    >
      {todo.title}
    </li>
  );
});
