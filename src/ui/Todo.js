import React, { memo as memoizedComponent } from 'react';
import { NOOP } from 'utils';

/**
 * interfce Todo {
 *   id: number;
 *   title: string;
 *   completed: boolean;
 * }
 */

export const Todo = memoizedComponent(function Todo({
  todo,
  onToggleTodo = NOOP,
  onRemoveTodo = NOOP,
}) {
  console.log(`Rendering: ${todo.id}`);
  const style = { textDecoration: todo.completed ? 'line-through' : 'none' };
  return (
    <li
      style={style}
      onClick={({ ctrlKey, metaKey }) => {
        if (ctrlKey || metaKey) {
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