import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { TodoList } from 'ui/TodoList';
import { TodoAdder } from 'ui/TodoAdder';
import { PageNotFound } from 'ui/PageNotFound';
import { useTodosService } from 'services/todos';
import { Header } from 'ui/Header';

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

const Title = styled.h1`
  margin-top: 0;
  color: ${props => props.theme.palette.primary};
`;

const Page = styled.main`
  height: 100vh;
  width: 100vw;
  padding: 10px;
  background-color: ${props => props.theme.palette.bgColor};
  color: ${props => props.theme.palette.textColor};
`;

function HomePage() {
  return <Title>This be home</Title>;
}

function TodosPage({ todos, addTodo, toggleTodo, removeTodo }) {
  return (
    <>
      <TodoAdder onAddTodo={addTodo} />
      {todos.length ? (
        <TodoList
          todos={todos}
          onToggleTodo={toggleTodo}
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

export function App() {
  const { todos, toggleTodo, removeTodo, addTodo } = useTodosService();
  return (
    <Page>
      <Title>Todo list</Title>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/todos"
          render={() => (
            <TodosPage {...{ todos, addTodo, removeTodo, toggleTodo }} />
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Page>
  );
}
