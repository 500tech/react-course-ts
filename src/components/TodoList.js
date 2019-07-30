import React from 'react';
import { Todo } from './Todo';

export function TodoList({ items, onToggleTodo, onRemoveTodo }) {
  return (
    <ul>
      {items.map(item => (
        <Todo
          key={item.id}
          todo={item}
          onToggleTodo={onToggleTodo}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
}
