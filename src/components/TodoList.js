import React, { lazy, Suspense } from 'react';
const Todo = lazy(() => import('./Todo'));

export function TodoList({ todos = [], toggleTodo, removeTodo }) {
  return (
    <Suspense fallback="Loading">
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
    </Suspense>
  );
}
