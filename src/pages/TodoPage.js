import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

export default class TodoPage extends Component {
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

  createTodo = todo => {
    const { todos } = this.state;
    this.setState({
      todos: todos.concat([todo]),
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <TodoList todos={todos} toggleDone={this.toggleTodo} />
        <AddTodo autoFocus onAddTodo={this.createTodo} />
      </>
    );
  }
}
