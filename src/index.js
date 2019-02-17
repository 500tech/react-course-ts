import React, { Component, useState, useCallback } from 'react';
import { render } from 'react-dom';

const Todo = ({ todo, toggleTodo }) => (
  <p
    onClick={() => toggleTodo(todo.id)}
    style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
  >
    {todo.text}
  </p>
);

const TodoList = ({ todos, toggleTodo }) => (
  <div>
    {todos.map(todo => (
      <Todo todo={todo} toggleTodo={toggleTodo} key={todo.id} />
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

const initialTodos = [
  { id: 1, text: 'Foobar meow', done: true },
  { id: 2, text: 'Spam buzz pow', done: false },
  { id: 3, text: 'Find better things to do', done: true },
];
/*
class App extends Component {
  state = {
    todos,
  };

  toggleTodo = tid => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === tid
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      ),
    });
  };

  render() {
    return (
      <div>
        <Title title="meow" hidden>
          <hr />
          <Foo />
        </Title>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}
*/

function useTodos(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo = tid =>
    setTodos(
      todos.map(todo =>
        todo.id === tid
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  const addTodo = text => {
    const maxId = Math.max(...todos.map(t => t.id));
    const todo = { id: maxId + 1, text, done: false };
    setTodos([...todos, todo]);
  };
  return { todos, toggleTodo, addTodo };
}

function useControlledInput(defaultText = '') {
  const [text, setText] = useState(defaultText);
  const onTextChange = event => setText(event.target.value);
  const reset = () => setText('');
  const inputParams = { value: text, onChange: onTextChange };
  return { inputParams, text, reset };
}

function AddTodo({ addTodo }) {
  const { inputParams, text, reset } = useControlledInput();
  const onAddTodo = () => {
    addTodo(text);
    reset();
  };
  return (
    <>
      <input {...inputParams} />
      <button disabled={!text.length} onClick={onAddTodo}>
        Add
      </button>
    </>
  );
}

function App() {
  const { todos, toggleTodo, addTodo } = useTodos(initialTodos);
  return (
    <div>
      <Title title="meow" hidden>
        <hr />
        <Foo />
      </Title>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

render(<App />, document.getElementById('root'));
