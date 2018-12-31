import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

const Section = styled.div`
  display: inline-block;
  vertical-align: top;
`;

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

  gotoTodo = index => this.props.history.push(`/todos/${index}`);

  toggleTodo = indexToToggle => {
    this.setState({
      todos: this.state.todos.map((todo, idx) =>
        idx === indexToToggle ? { ...todo, done: !todo.done } : todo
      ),
    });
  };

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
        <Route
          path="/todos/:todosIndex?"
          render={() => {
            return (
              <Section>
                <TodoList
                  todos={todos}
                  toggleDone={this.toggleTodo}
                  gotoTodo={this.gotoTodo}
                />
                <AddTodo autoFocus onAddTodo={this.createTodo} />
              </Section>
            );
          }}
        />
        <Route
          path="/todos/:todosIndex"
          render={({ match }) => {
            return (
              <Section>
                {JSON.stringify(todos[match.params.todosIndex])}
              </Section>
            );
          }}
        />
      </>
    );
  }
}
