import React from 'react';
import { Todo } from './Todo';

export function TodoList({ todos = [], toggleTodo, removeTodo }) {
  return (
    <ol>
      {todos.map((todo, idx) => (
        <Todo
          key={todo.id}
          onToggleTodo={() => toggleTodo(idx)}
          onRemoveTodo={() => removeTodo(idx)}
          {...todo}
        />
      ))}
    </ol>
  );
}
