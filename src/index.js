import React, { useState } from 'react';
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

function useForceRender() {
  const [version, setVersion] = useState(0);
  const rerender = () => setVersion(version + 1);
  return rerender;
}

function App({ children }) {
  const rerender = useForceRender();
  const [todos, setTodos] = useState([
    { id: uuid(), text: 'Learn Hebrew', done: false },
    { id: uuid(), text: 'Order lunch', done: true },
  ]);
  const [color, setColor] = useState('blue');

  const toggleTodo = todo => {
    // todo.done = !todo.done;
    // setTodos([...todos]);
    return setTodos(
      todos.map(t =>
        t.id === todo.id
          ? {
              ...todo,
              done: !todo.done,
            }
          : t
      )
    );
  };
  console.log('render');
  return (
    <div className="container" onClick={() => rerender()}>
      <h1 style={{ color }}>Todo list</h1>
      {children ? <p>{children}</p> : null}
      {todos.length ? (
        <TodoList items={todos} onToggleTodo={toggleTodo} />
      ) : (
        <NoItemsEmptyState />
      )}
    </div>
  );
}

ReactDOM.render(<App>Display this</App>, document.getElementById('root'));
