import React from 'react';
import styled from 'styled-components';
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

export function TodosPage({ onAddTodo, onDeleteTodo, todos, onToggleTodo}) {
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
    </>
  );
}
