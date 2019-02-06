import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

import { AddTodo } from './AddTodo';
import { Greeting } from './Greeting';
import { TodoList } from './TodoList';

const Container = styled.div`
  border: 1px solid lightblue;
`;

export class App extends Component {
  state = {
    todos: [
      { $id: uuid(), text: 'This is todo #1', done: true },
      { $id: uuid(), text: 'This is todo #2', done: false },
      { $id: uuid(), text: 'This is todo #3', done: false },
      { $id: uuid(), text: 'This is todo #4', done: false },
      { $id: uuid(), text: 'This is todo #5', done: false },
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

  onAddTodo = text => {
    const todo = { text, done: false, $id: uuid() };
    const { todos } = this.state;
    this.setState({
      todos: [...todos, todo],
    });
  };

  onRemoveTodo = idx => {
    const { todos } = this.state;
    const newTodos = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <Container>
        <Greeting name="foobar" />
        <AddTodo onAddTodo={this.onAddTodo} />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          removeTodo={this.onRemoveTodo}
        />
      </Container>
    );
  }
}
