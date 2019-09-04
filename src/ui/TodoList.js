import React from 'react';
import { Todo } from 'ui/Todo';

export function TodoList({ todos, onUpdateTodo, onRemoveTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onUpdateTodo={onUpdateTodo}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
}
