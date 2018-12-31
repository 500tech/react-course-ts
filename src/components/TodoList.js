import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos = [], toggleDone }) {
  return (
    <ol>
      {todos.map((todo, idx) => (
        <Todo
          key={idx}
          text={todo.text}
          isDone={todo.done}
          toggleDone={() => toggleDone(idx)}
        />
      ))}
    </ol>
  );
}
