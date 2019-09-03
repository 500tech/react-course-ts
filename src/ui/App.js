import React, { useState } from 'react';
import { TodoList } from 'ui/TodoList';
import { TodoAdder } from 'ui/TodoAdder';
import { useTodosService } from 'services/todos';

function NoItemsEmptyState() {
  return <p>Oh noes, no items yet! Please create one :)</p>;
}

export function App({ initialColor = 'pink' }) {
  const [color, setColor] = useState(initialColor);
  const { todos, toggleTodo, removeTodo, addTodo } = useTodosService();
  return (
    <div className="container">
      <h1 onClick={() => setColor('green')} style={{ color }}>
        Todo list
      </h1>
      <TodoAdder onAddTodo={addTodo} />
      {todos.length ? (
        <TodoList
          todos={todos}
          onToggleTodo={toggleTodo}
          onRemoveTodo={removeTodo}
        />
      ) : (
        <NoItemsEmptyState />
      )}
    </div>
  );
}
