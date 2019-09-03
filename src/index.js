import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { getId, NOOP } from './utils';

/**
 * interfce Todo {
 *   id: number;
 *   title: string;
 *   completed: boolean;
 * }
 */

function NoItemsEmptyState() {
  return <p>Oh noes, no items yet! Please create one :)</p>;
}

function Todo({ todo, onToggleTodo = NOOP }) {
  const style = { textDecoration: todo.completed ? 'line-through' : 'none' };
  return (
    <li
      style={style}
      onClick={() => {
        onToggleTodo(todo.id);
      }}
    >
      {todo.title}
    </li>
  );
}

function TodoList({ todos, onToggleTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
}

function App({ color = 'pink' }) {
  const [todos, setTodos] = useState([
    { id: getId(), title: 'Do this', completed: false },
    { id: getId(), title: 'Do that', completed: true },
  ]);
  const toggleTodo = todoId => {
    const updatesTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatesTodos);
  };
  return (
    <div className="container">
      <h1 style={{ color }}>Todo list</h1>
      {todos.length ? (
        <TodoList todos={todos} onToggleTodo={toggleTodo} />
      ) : (
        <NoItemsEmptyState />
      )}
    </div>
  );
}

ReactDOM.render(<App color="blue"></App>, document.getElementById('root'));
