import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import './index.css';

// Todo { text, done, id }

function NoItemsEmptyState() {
  return <p>Oh noes, no items yet! Please create one :)</p>;
}

function Todo({ todo }) {
  const style = { textDecoration: todo.done ? 'line-through' : 'none' };
  return (
    <li
      style={style}
      onClick={event => {
        // event.persist();
        const { target } = event;
        console.log(event);
        console.log(event.target);
        setTimeout(() => {
          console.log(target);
        }, 3);
      }}
    >
      {todo.text}
    </li>
  );
}

function TodoList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <Todo key={item.id} todo={item} />
      ))}
    </ul>
  );
}

function App({ color = 'pink', items = [], children }) {
  return (
    <div className="container">
      <h1 style={{ color }}>Todo list</h1>
      {children ? <p>{children}</p> : null}
      {items.length ? <TodoList items={items} /> : <NoItemsEmptyState />}
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
