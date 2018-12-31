import React, { Component } from 'react';
import styled from 'styled-components';
import Greeting from './components/Greeting';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const Container = styled.div`
  border: 1px solid lightblue;
`;

export default class App extends Component {
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
      <Container className="app-container">
        <Greeting name="foobar" />
        <TodoList todos={todos} toggleDone={this.toggleTodo} />
        <AddTodo autoFocus onAddTodo={this.createTodo} />
      </Container>
    );
  }
}
