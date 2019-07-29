import React from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';
import { TodoAdder } from './TodoAdder';
import { TodoList } from './TodoList';

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

export function TodosPage({ onAddTodo, onDeleteTodo, todos, onToggleTodo }) {
  return (
    <>
      <TodoAdder onAddTodo={onAddTodo} />
      {todos && todos.length ? (
        <TodoList
          todos={todos}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ) : (
        <EmptyState />
      )}
      <Route
        path="/todos/:todoId"
        render={({ match }) => {
          const { params } = match;
          const { todoId } = params;
          const todo = todos.find(t => t.id === +todoId);
          if (!todo) {
            return <Redirect to="/404" />;
          }
          return <p>{todo.title}</p>;
        }}
      />
    </>
  );
}
