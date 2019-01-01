import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import AddTodo from '../../components/AddTodo';

const Section = styled.div`
  display: inline-block;
  vertical-align: top;
`;

export default (class TodoPage extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  gotoTodo = index => this.props.history.push(`/todos/${index}`);

  toggleTodo = indexToToggle => {
    this.props.toggleTodo(indexToToggle);
  };

  createTodo = todo => {
    this.props.createTodo(todo);
  };

  render() {
    const { todos } = this.props;
    if (todos === null) {
      return 'Loading...';
    }
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
});
