import React, {
  useState,
  useEffect,
  useRef,
  memo as memoizedComponent,
} from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import './index.css';

// Todo { text, done, id }

const NOOP = () => null;

const BlackHole = memoizedComponent(
  ({ text }) => {
    const pref = useRef();
    useEffect(() => {
      const p = pref.current;

    }, []);
    console.log('black hole rendered');
    return <p ref={pref}>{text}</p>;
  },
  () => true
);

function NoItemsEmptyState() {
  return <p>Oh noes, no items yet! Please create one :)</p>;
}

function Todo({ todo, onToggleTodo = NOOP, onRemoveTodo = NOOP }) {
  const style = { textDecoration: todo.done ? 'line-through' : 'none' };
  return (
    <li
      style={style}
      onClick={() => onToggleTodo(todo)}
      onDoubleClick={() => onRemoveTodo(todo)}
    >
      {todo.text}
    </li>
  );
}

function TodoList({ items, onToggleTodo, onRemoveTodo }) {
  return (
    <ul>
      {items.map(item => (
        <Todo
          key={item.id}
          todo={item}
          onToggleTodo={onToggleTodo}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
}

function TodoAdder({ onAddTodo = NOOP }) {
  const [draft, setDraft] = useState('');
  const inputRef = useRef();
  useEffect(() => {
    const tid = setTimeout(() => console.log('No input for a while...'), 3000);
    return () => clearTimeout(tid);
  }, [draft]);
  useEffect(() => {
    const actualInputNode = inputRef.current;
    actualInputNode.focus();
  }, []);
  return (
    <>
      <input
        type="text"
        ref={inputRef}
        value={draft}
        onChange={event => setDraft(event.target.value)}
      />
      <button
        onClick={() => {
          onAddTodo(draft);
          setDraft('');
        }}
        disabled={!draft}
      >
        Add Todo
      </button>
    </>
  );
}

function useTodosService(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = todo => {
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

  const removeTodo = todo => setTodos(todos.filter(({ id }) => id !== todo.id));
  const addTodo = text =>
    setTodos([
      {
        id: uuid(),
        text,
        done: false,
      },
      ...todos,
    ]);
  return { todos, toggleTodo, removeTodo, addTodo };
}

function App({ children }) {
  const { todos, removeTodo, toggleTodo, addTodo } = useTodosService([
    { id: uuid(), text: 'Learn Hebrew', done: false },
    { id: uuid(), text: 'Order lunch', done: true },
  ]);
  const [color, setColor] = useState('blue');

  return (
    <div className="container" onClick={() => setColor('red')}>
      <h1 style={{ color }}>Todo list</h1>
      <BlackHole text={color} />
      {children ? <p>{children}</p> : null}
      <TodoAdder onAddTodo={addTodo} />
      {todos.length ? (
        <TodoList
          items={todos}
          onToggleTodo={toggleTodo}
          onRemoveTodo={removeTodo}
        />
      ) : (
        <NoItemsEmptyState />
      )}
    </div>
  );
}

ReactDOM.render(<App>Display this</App>, document.getElementById('root'));
