import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import './index.css';

// Todo { text, done, id }

const NOOP = () => null;

function NoItemsEmptyState() {
  return <p>Oh noes, no items yet! Please create one :)</p>;
}

function Todo({ todo, onToggleTodo = NOOP, onRemoveTodo = NOOP }) {
  const style = { textDecoration: todo.done ? 'line-through' : 'none' };
  return (
    <li
      style={style}
      onClick={() => onToggleTodo(todo)}
      onDoubleClick={() => onRemoveTodo(todo)}
    >
      {todo.text}
    </li>
  );
}

function TodoList({ items, onToggleTodo, onRemoveTodo }) {
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

function useTodosService(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = todo => {
    return setTodos(
      todos.map(t =>
        t.id === todo.id
          ? {
              ...todo,
              done: !todo.done,
            }
          : t
      )
    );
  };

  const removeTodo = todo => setTodos(todos.filter(({ id }) => id !== todo.id));

  return { todos, toggleTodo, removeTodo };
}

function App({ children }) {
  const { todos, removeTodo, toggleTodo } = useTodosService([
    { id: uuid(), text: 'Learn Hebrew', done: false },
    { id: uuid(), text: 'Order lunch', done: true },
  ]);
  const [color, setColor] = useState('blue');

  return (
    <div className="container" onClick={() => setColor('red')}>
      <h1 style={{ color }}>Todo list</h1>
      {children ? <p>{children}</p> : null}
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

ReactDOM.render(<App>Display this</App>, document.getElementById('root'));
