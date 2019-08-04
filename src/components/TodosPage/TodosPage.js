import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { TodoAdder } from 'components/TodoAdder';
import { TodoList } from 'components/TodoList';
import { SelectedTodoPage } from './SelectedTodoPage';

const Box = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color: ivory;

  code {
    background-color: grey;
    color: limegreen;

    &:hover {
      color: red;
    }
  }
`;

function EmptyState() {
  return (
    <Box>
      <h3>
        Nothing to do! <code>goto</code> the beach!
      </h3>
    </Box>
  );
}

export class TodosPage extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { addTodo, deleteTodo, todos, toggleTodo, isLoading } = this.props;
    return (
      <>
        <TodoAdder onAddTodo={addTodo} />
        {isLoading ? (
          <p>Loading...</p>
        ) : todos && todos.length ? (
          <TodoList
            todos={todos}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
          />
        ) : (
          <EmptyState />
        )}
        <Route path="/todos/:todoId" component={SelectedTodoPage} />
      </>
    );
  }
}
