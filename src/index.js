import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting({ name = 'stranger' }) {
  return <h1 className="greeting">Hello, {name}!</h1>;
}

function Todo({ text, isDone, toggleDone }) {
  return (
    <li
      onClick={toggleDone}
      style={isDone ? { textDecoration: 'line-through' } : null}
    >
      {text}
    </li>
  );
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

function AddTodo({ addTodo }) {
  return <button onClick={addTodo}>Add a new Todo item</button>;
}

// @TODO add button to create new todo
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

  toggleTodo = indexToToggle =>
    this.setState({
      todos: this.state.todos.map((todo, idx) =>
        idx === indexToToggle ? { ...todo, done: !todo.done } : todo
      ),
    });

  onAddTodo = () => {
    const { todos } = this.state;
    const todo = {
      text: `This is todo #${todos.length + 1}`,
      done: false,
    };
    const newTodos = [...todos, todo];
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="app-container">
        <Greeting name="foobar" />
        <TodoList todos={todos} toggleDone={this.toggleTodo} />
        <AddTodo addTodo={this.onAddTodo} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
