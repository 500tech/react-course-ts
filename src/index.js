import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { getUniqueId } from './utils';

/**
 * interface Todo {
 *  id: number;
 *  title: string;
 *  completed: boolean;
 * }
 */

const TODOS = [
  { id: getUniqueId(), title: 'Go home', completed: false },
  { id: getUniqueId(), title: 'Order 10bis', completed: true },
  { id: getUniqueId(), title: 'Take a break', completed: false },
];

window.TODOS = TODOS;

function BorderedContainer({ children }) {
  return <div className="main-container">{children}</div>;
}

function Title({ color, children }) {
  return <h1 style={{ color }}>{children}</h1>;
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

function App({ color = 'blue', children, todos }) {
  return (
    <BorderedContainer>
      <Title color={color}>Hello, world!</Title>
      {children ? <p>{children}</p> : null}
      {children && <p>{children}</p>}
      <TodoList todos={todos} />
    </BorderedContainer>
  );
}

ReactDOM.render(
  <App todos={TODOS}>Yo yo!</App>,
  document.getElementById('root')
);

// React.createElement(BorderedContainer, null, [
//  React.createElement(Title, { color }, ['Hello world']),
//  null,
//  null,
//  React.createElement(TodoList, { todos: todos }),
// ]);

// React.createElement('div', { className: 'sfsdf' })