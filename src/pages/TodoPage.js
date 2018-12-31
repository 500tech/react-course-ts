import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import withRedux from '../withRedux'
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import * as todos from '../store/todos.actors';

const Section = styled.div`
  display: inline-block;
  vertical-align: top;
`;

export default withRedux(class TodoPage extends Component {
  gotoTodo = index => this.props.history.push(`/todos/${index}`);

  toggleTodo = indexToToggle => {
    this.props.dispatch(todos.toggleTodo(indexToToggle));
  };

  createTodo = todo => {
    this.props.dispatch(todos.createTodo(todo));
  };

  render() {
    const { reduxState: todos } = this.props;
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
)