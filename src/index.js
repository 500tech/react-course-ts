import React, { memo as memoizedComponent, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { getId, NOOP } from './utils';

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

const Todo = memoizedComponent(function Todo({
  todo,
  onToggleTodo = NOOP,
  onRemoveTodo = NOOP,
}) {
  console.log(`Rendering: ${todo.id}`);
  const style = { textDecoration: todo.completed ? 'line-through' : 'none' };
  return (
    <li
      style={style}
      onClick={({ ctrlKey, metaKey }) => {
        if (ctrlKey || metaKey) {
          onRemoveTodo(todo.id);
        } else {
          onToggleTodo(todo.id);
        }
      }}
    >
      {todo.title}
    </li>
  );
});

function TodoList({ todos, onToggleTodo, onRemoveTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
}

function useTodosService() {
  const [todos, setTodos] = useState([
    { id: getId(), title: 'Do this', completed: false },
    { id: getId(), title: 'Do that', completed: true },
  ]);
  const toggleTodo = useCallback(todoId => {
    setTodos(todos =>
      todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }, []);
  const removeTodo = useCallback(todoId => {
    setTodos(todos =>
      todos.filter(todo => {
        return todo.id !== todoId;
      })
    );
  }, []);
  return { todos, toggleTodo, removeTodo };
}

function App({ initialColor = 'pink' }) {
  const [color, setColor] = useState(initialColor);
  const { todos, toggleTodo, removeTodo } = useTodosService();
  return (
    <div className="container">
      <h1 onClick={() => setColor('green')} style={{ color }}>
        Todo list
      </h1>
      {todos.length ? (
        <TodoList
          todos={todos}
          onToggleTodo={toggleTodo}
          onRemoveTodo={removeTodo}
        />
      ) : (
        <NoItemsEmptyState />
      )}
    </div>
  );
}

ReactDOM.render(
  <App initialColor="blue"></App>,
  document.getElementById('root')
);
