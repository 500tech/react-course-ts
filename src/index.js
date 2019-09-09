import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { getUniqueId, NOOP, getRandomRGB } from './utils';

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

function Title({ color, children, onChangeColor = NOOP }) {
  return (
    <h1 style={{ color }} onClick={onChangeColor}>
      {children}
    </h1>
  );
}

function Todo({ todo, onToggleTodo = NOOP }) {
  const style = { textDecoration: todo.completed ? 'line-through' : 'none' };
  return (
    <li
      style={style}
      onClick={() => {
        onToggleTodo(todo.id);
      }}
    >
      {todo.title}
    </li>
  );
}

function TodoList({ todos, onToggleTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
}

function App({ initialColor = 'blue', children }) {
  const [color, setColor] = useState(initialColor);
  const [todos, setTodos] = useState(TODOS);
  function toggleTodo(todoId) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  function changeColor() {
    setColor(getRandomRGB());
  }
  return (
    <BorderedContainer>
      <Title color={color} onChangeColor={changeColor}>
        Hello, world!
      </Title>
      {children ? <p>{children}</p> : null}
      {children && <p>{children}</p>}
      <TodoList todos={todos} onToggleTodo={toggleTodo} />
    </BorderedContainer>
  );
}

ReactDOM.render(<App></App>, document.getElementById('root'));

// React.createElement(BorderedContainer, null, [
//  React.createElement(Title, { color }, ['Hello world']),
//  null,
//  null,
//  React.createElement(TodoList, { todos: todos }),
// ]);

// React.createElement('div', { className: 'sfsdf' })
