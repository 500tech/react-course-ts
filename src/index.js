import React, { Component, memo, createRef } from 'react';
import { render } from 'react-dom';

function fetchFromServer(id) {}

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

const Foo = memo(() => console.log('render') || <p>Foo</p>);

const initialTodos = [
  { id: 1, text: 'Foobar meow', done: true },
  { id: 2, text: 'Spam buzz pow', done: false },
  { id: 3, text: 'Find better things to do', done: true },
];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  componentDidMount() {
    fetchFromServer(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      fetchFromServer(this.props.id);
    }
  }

  setTodos = todos => this.setState({ todos });

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

  addTodo = text => {
    const maxId = Math.max(...this.state.todos.map(t => t.id));
    const todo = { id: maxId + 1, text, done: false };
    this.setTodos([...this.state.todos, todo]);
  };

  render() {
    return (
      <div>
        <Foo />
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

class AddTodo extends Component {
  state = { text: '' };

  input = createRef();

  componentDidMount() {
    // this.input.current.focus();
  }

  setText = text => this.setState({ text });

  reset = () => this.setText('');

  onTextChange = event => this.setText(event.target.value);

  onAddTodo = () => {
    this.props.addTodo(this.state.text);
    this.reset();
  };

  render() {
    return (
      <>
        <input
          ref={this.input}
          onChange={this.onTextChange}
          value={this.state.text}
        />
        <button disabled={!this.state.text.length} onClick={this.onAddTodo}>
          Add
        </button>
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
