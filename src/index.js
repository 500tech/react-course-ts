import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting({ name = 'stranger' }) {
  return <h1 className="greeting">Hello, {name}!</h1>;
}

function Todo({ text, done, onToggleTodo }) {
  return (
    <li
      onClick={onToggleTodo}
      style={{ textDecoration: done ? 'line-through' : 'none' }}
    >
      {text}
    </li>
  );
}

function TodoList({ todos = [], toggleTodo }) {
  return (
    <ol>
      {todos.map((todo, idx) => (
        <Todo key={idx} onToggleTodo={() => toggleTodo(idx)} {...todo} />
      ))}
    </ol>
  );
}

class App extends Component {
  state = {
    todos: [
      { text: 'This is todo #1', done: true },
      { text: 'This is todo #2', done: false },
      { text: 'This is todo #3', done: false },
      { text: 'This is todo #4', done: false },
      { text: 'This is todo #5', done: false },
    ],
  };

  toggleTodo = todoIndex => {
    const { todos } = this.state;
    const newTodos = todos.map((todo, idx) =>
      idx === todoIndex
        ? {
            ...todo,
            done: !todo.done,
          }
        : todo
    );
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
