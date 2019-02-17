import React from 'react';
import { render } from 'react-dom';

const todos = [
  { text: 'Foobar meow', done: true },
  { text: 'Spam buzz pow', done: false },
  { text: 'Find better things to do', done: false },
];

const Todo = ({ todo }) => (
  <p style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
    {todo.text}
  </p>
);

const TodoList = () => (
  <div>
    <Todo todo={todos[0]} />
    <Todo todo={todos[1]} />
    <Todo todo={todos[2]} />
  </div>
);

function Title({ title, children, hidden }) {
  if (hidden) {
    return null;
  }
  return <h1 style={{ background: 'red' }}>{title ? title : children}</h1>;
}

const Foo = () => <span>Foo</span>;

render(
  <div>
    <Title title="meow" hidden>
      <hr />
      <Foo />
    </Title>
    <TodoList />
  </div>,
  document.getElementById('root')
);
