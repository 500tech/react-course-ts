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

function TodoList({ todos = [], toggleDone, showDone }) {
  return (
    <ol>
      {todos.map((todo, idx) =>
        !showDone && todo.done ? null : (
          <Todo
            key={idx}
            text={todo.text}
            isDone={todo.done}
            toggleDone={() => toggleDone(idx)}
          />
        )
      )}
    </ol>
  );
}

function AddTodo({ addTodo }) {
  return <button onClick={addTodo}>Add a new Todo item</button>;
}

function ToggleDoneVisibility({ toggleDoneVisibility }) {
  return <button onClick={toggleDoneVisibility}>Toggle done visibility</button>;
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
    showDone: true,
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

  onToggleDoneVisibility = () =>
    this.setState({ showDone: !this.state.showDone });

  render() {
    const { todos, showDone } = this.state;
    return (
      <div className="app-container">
        <Greeting name="foobar" />
        <TodoList
          todos={todos}
          showDone={showDone}
          toggleDone={this.toggleTodo}
        />
        <AddTodo addTodo={this.onAddTodo} />
        <ToggleDoneVisibility
          toggleDoneVisibility={this.onToggleDoneVisibility}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
