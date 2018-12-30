import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting({ name = 'stranger' }) {
  return <h1 className="greeting">Hello, {name}!</h1>;
}

class Todo extends Component {
  render() {
    const { text, isDone, toggleDone } = this.props;
    return (
      <li
        onClick={toggleDone}
        style={isDone ? { textDecoration: 'line-through' } : null}
      >
        {text}
      </li>
    );
  }
}

function TodoList({ todos = [], toggleDone }) {
  return (
    <ol>
      {todos.map((todo, idx) => (
        <Todo
          key={idx}
          text={todo.text}
          isDone={todo.done}
          toggleDone={() => toggleDone(idx)}
        />
      ))}
    </ol>
  );
}

// @TODO submit todo item on <ENTER>
class App extends Component {
  state = {
    draftTodo: '',
    todos: [
      { text: 'This is todo #1', done: false },
      { text: 'This is todo #2', done: false },
      { text: 'This is todo #3', done: false },
      { text: 'This is todo #4', done: false },
      { text: 'This is todo #5', done: false },
    ],
  };

  constructor(props) {
    super(props);
    this.draftInput = createRef();
  }

  componentDidMount() {
    this.draftInput.current.focus();
  }

  toggleTodo = indexToToggle =>
    this.setState({
      todos: this.state.todos.map((todo, idx) =>
        idx === indexToToggle ? { ...todo, done: !todo.done } : todo
      ),
    });

  createTodo = () => {
    const { todos, draftTodo } = this.state;
    this.setState({
      draftTodo: '',
      todos: todos.concat([
        {
          text: draftTodo,
          done: false,
        },
      ]),
    });
  };

  onDraftTodoTextChange = ({ target: { value } }) =>
    this.setState({ draftTodo: value });

  render() {
    const { todos, draftTodo } = this.state;
    return (
      <div className="app-container">
        <Greeting name="foobar" />
        <TodoList todos={todos} toggleDone={this.toggleTodo} />
        <input
          ref={this.draftInput}
          type="text"
          placeholder="What should I do?"
          value={draftTodo}
          onChange={this.onDraftTodoTextChange}
        />
        <button onClick={this.createTodo} disabled={!draftTodo}>
          Create new
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
