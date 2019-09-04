import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';
import { TodoList } from 'ui/TodoList';
import { TodoAdder } from 'ui/TodoAdder';
import { useTodosService } from 'services/todos';

const Container = styled.div`
  border: 1px solid ${props => props.theme.palette.errorText};
  padding: 10px;
  background-color: ${props => props.theme.palette.error};

  p {
    color: ${props => props.theme.palette.errorText};
  }
`;

function NoItemsEmptyState() {
  return (
    <Container>
      <p>Oh noes, no items yet! Please create one :)</p>
    </Container>
  );
}

export function TodosPage() {
  const {
    todos,
    addTodo,
    updateTodo,
    removeTodo,
    fetchTodos,
  } = useTodosService();
  useEffect(() => {
    if (!todos.length) {
      fetchTodos();
    }
  }, [todos.length, fetchTodos]);
  return (
    <>
      <TodoAdder onAddTodo={addTodo} />
      {todos.length ? (
        <TodoList
          todos={todos}
          onUpdateTodo={updateTodo}
          onRemoveTodo={removeTodo}
        />
      ) : (
        <NoItemsEmptyState />
      )}
      <Route
        path="/todos/:todoId"
        render={({ match }) => {
          const todoId = +match.params.todoId;
          const todo = todos.find(t => t.id === todoId);
          if (!todo) {
            return <Redirect to="/todos" />;
          }
          return <p>{todo.title}</p>;
        }}
      />
    </>
  );
}
