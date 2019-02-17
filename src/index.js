import React from 'react';
import { render } from 'react-dom';

const todos = [
  { id: 1, text: 'Foobar meow', done: true },
  { id: 2, text: 'Spam buzz pow', done: false },
  { id: 3, text: 'Find better things to do', done: true },
];

function logEvent(e) {
  e.persist();
  console.log(e);
}

const Todo = ({ todo }) => (
  <p
    onClick={logEvent}
    style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
  >
    {todo.text}
  </p>
);

const TodoList = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <Todo todo={todo} key={todo.id} />
    ))}
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
    <TodoList todos={todos} />
  </div>,
  document.getElementById('root')
);
