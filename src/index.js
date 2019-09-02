import React from 'react';
import ReactDOM from 'react-dom';
import { getId } from './utils';

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

function Todo({ todo }) {
  const style = { textDecoration: todo.completed ? 'line-through' : 'none' };
  return <li style={style}>{todo.title}</li>;
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
  { id: getId(), title: 'Do this', completed: false },
  { id: getId(), title: 'Do that', completed: true },
];

window.todos = TODOS;

ReactDOM.render(
  <App color="blue" items={TODOS}>
    Display this
  </App>,
  document.getElementById('root')
);
