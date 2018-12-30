import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting({ name = 'stranger' }) {
  return <h1 className="greeting">Hello, {name}!</h1>;
}

function Todo({ text, isDone, toggleDone }) {
  return (
    <li
      onClick={toggleDone}
      style={isDone ? { textDecoration: 'line-through' } : null}
    >
      {text}
    </li>
  );
}

function TodoList({ todos = [], toggleDone }) {
  return (
    <ol>
      {todos.map((todo, idx) => (
        <Todo
          key={idx}
          text={todo.text}
          isDone={todo.done}
          toggleDone={toggleDone.bind(null, todo)}
        />
      ))}
    </ol>
  );
}

function App({ children }) {
  return <div className="app-container">{children}</div>;
}

// why doesn't our app update when we change this array?
window.todos = [
  { text: 'This is todo #1', done: false },
  { text: 'This is todo #2', done: false },
  { text: 'This is todo #3', done: false },
  { text: 'This is todo #4', done: false },
  { text: 'This is todo #5', done: false },
];

function toggleDone(todo) {
  todo.done = !todo.done;
}

ReactDOM.render(
  <App>
    <Greeting name="foobar" />
    <TodoList todos={window.todos} toggleDone={toggleDone} />
  </App>,
  document.getElementById('root')
);
