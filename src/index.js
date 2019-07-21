import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import './index.css';

// Todo { text, done, id }

function App({ color = 'pink', items = [], children }) {
  return (
    <div className="container">
      <h1 style={{ color }}>Todo list</h1>
      {children ? <p>{children}</p> : null}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

const TODOS = [
  { id: uuid(), text: 'Learn Hebrew', done: false },
  { id: uuid(), text: 'Order lunch', done: true },
];

ReactDOM.render(
  <App color="blue" items={TODOS}>
    Display this
  </App>,
  document.getElementById('root')
);
