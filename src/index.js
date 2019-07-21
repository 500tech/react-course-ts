import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import './index.css';

// Todo { text, done, id }

const NOOP = () => null;

function NoItemsEmptyState() {
  return <p>Oh noes, no items yet! Please create one :)</p>;
}

function Todo({ todo, onToggleTodo = NOOP }) {
  const style = { textDecoration: todo.done ? 'line-through' : 'none' };
  return (
    <li style={style} onClick={() => onToggleTodo(todo)}>
      {todo.text}
    </li>
  );
}

function TodoList({ items, onToggleTodo }) {
  return (
    <ul>
      {items.map(item => (
        <Todo key={item.id} todo={item} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
}

function App({ color = 'pink', items = [], children }) {
  return (
    <div className="container">
      <h1 style={{ color }}>Todo list</h1>
      {children ? <p>{children}</p> : null}
      {items.length ? (
        <TodoList items={items} onToggleTodo={console.log} />
      ) : (
        <NoItemsEmptyState />
      )}
    </div>
  );
}

const TODOS = [
  { id: uuid(), text: 'Learn Hebrew', done: false },
  { id: uuid(), text: 'Order lunch', done: true },
];

window.todos = TODOS;

ReactDOM.render(
  <App color="blue" items={TODOS}>
    Display this
  </App>,
  document.getElementById('root')
);
