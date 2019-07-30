import React from 'react';
import uuid from 'uuid';
import { TodoAdder } from './TodoAdder';
import { TodoList } from './TodoList';
import { useTodosService } from '../services/todos';

function NoItemsEmptyState() {
  return <p>Oh noes, no items yet! Please create one :)</p>;
}

export function App() {
  const { todos, removeTodo, toggleTodo, addTodo } = useTodosService([
    { id: uuid(), text: 'Learn Hebrew', done: false },
    { id: uuid(), text: 'Order lunch', done: true },
  ]);

  return (
    <div className="container">
      <h1>Todo list</h1>
      <TodoAdder onAddTodo={addTodo} />
      {todos.length ? (
        <TodoList
          items={todos}
          onToggleTodo={toggleTodo}
          onRemoveTodo={removeTodo}
        />
      ) : (
        <NoItemsEmptyState />
      )}
    </div>
  );
}
