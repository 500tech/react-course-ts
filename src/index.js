import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting({ name = 'stranger' }) {
  return <h1 className="greeting">Hello, {name}!</h1>;
}

function Todo({ text, isDone, onToggle }) {
  return (
    <li
      onClick={onToggle}
      style={isDone ? { textDecoration: 'line-through' } : null}
    >
      {text}
    </li>
  );
}

function TodoList({ todos = [], toggleTodo }) {
  return (
    <ol>
      {todos.map((todo, idx) => (
        <Todo
          key={idx}
          text={todo.text}
          isDone={todo.done}
          onToggle={() => toggleTodo(idx)}
        />
      ))}
    </ol>
  );
}

class App extends Component {
  state = {
    todos: [
      { text: 'This is todo #1', done: false },
      { text: 'This is todo #2', done: false },
      { text: 'This is todo #3', done: false },
      { text: 'This is todo #4', done: false },
      { text: 'This is todo #5', done: false },
    ],
  };

  toggleTodo = index => {
    const { todos } = this.state;
    const newTodos = todos.filter((_todo, idx) => {
      return index !== idx;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="app-container">
        <Greeting name="foobar" />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
