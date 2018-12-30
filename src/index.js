import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting({ name = 'stranger' }) {
  return <h1 className="greeting">Hello, {name}!</h1>;
}

function Todo({ text, isDone }) {
  return (
    <li onClick={console.log} style={isDone ? { textDecoration: 'line-through' } : null}>{text}</li>
  );
}

// @TODO mark a todo as done when clicked
function TodoList({ todos = [] }) {
  return (
    <ol>
      {todos.map((todo, idx) => (
        <Todo
          key={idx}
          text={todo.text}
          isDone={todo.done}
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

ReactDOM.render(
  <App>
    <Greeting name="foobar" />
    <TodoList todos={window.todos} />
  </App>,
  document.getElementById('root')
);
