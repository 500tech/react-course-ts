import React from 'react';
import { getId } from './utils';

/**
 * interface Todo {
 *   id: number;
 *   title: string;
 *   completed: boolean;
 * }
 */

const TODOS = [
  { id: getId(), title: 'Get up in time', completed: true },
  { id: getId(), title: 'Eat at Meatbar', completed: true },
  { id: getId(), title: 'Learn ReactJS', completed: false },
];

window.todos = TODOS;

function Todo({ todo }) {
  const style = todo.completed ? { textDecoration: 'line-through' } : {};
  return (
    <li style={style}>
      {todo.title}
    </li>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

function EmptyState() {
  return (
    <h3>
      Nothing to do! <code>goto</code> the beach!
    </h3>
  );
}

export function App({ greeting = 'Hello', username }) {
  return (
    <div className="container">
      <h1>
        <span>{username ? `${greeting}, ${username}` : greeting}</span>
      </h1>
      {TODOS && TODOS.length ? <TodoList todos={TODOS} /> : <EmptyState />}
    </div>
  );
}
