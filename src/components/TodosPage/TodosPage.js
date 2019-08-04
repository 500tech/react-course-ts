import React from 'react';
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

export function TodosPage({ addTodo, deleteTodo, todos, toggleTodo }) {
  return (
    <>
      <TodoAdder onAddTodo={addTodo} />
      {todos && todos.length ? (
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
