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

export function App({ greeting = 'Hello', username }) {
  return (
    <div className="container">
      <h1>
        <span>{username ? `${greeting}, ${username}` : greeting}</span>
      </h1>
      <ul>
        {TODOS.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
