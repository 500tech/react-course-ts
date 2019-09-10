import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Title, BorderedContainer } from 'ui/common';
import { TodoList } from 'ui/TodoList';
import { TodoAdder } from 'ui/TodoAdder';
import { useTodos } from 'services/todos';
import { darkTheme, lightTheme } from 'themes';

function HomePage(props) {
  console.log(props);
  return <Title color={'green'}>This is the home page</Title>;
}

function PageNotFound() {
  return <p>404</p>;
}

function TodosPage({ addTodo, todos, toggleTodo, removeTodo }) {
  const pendingTodosCount = useMemo(
    () => todos.filter(todo => !todo.completed).length,
    [todos]
  );
  return (
    <>
      <Title color={'blue'}>Todo List ({pendingTodosCount})</Title>
      <TodoAdder onAddTodo={addTodo} autoSubmit={pendingTodosCount === 0} />
      <Route
        path="/todos/:todoId"
        render={props => {
          const todoId = +props.match.params.todoId;
          const todo = todos.find(todo => todo.id === todoId);
          if (!todo) {
            return <Redirect to="/todos" />;
          }
          return todo.title;
        }}
      />
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onRemoveTodo={removeTodo}
      />
    </>
  );
}

export function App() {
  const [theme, setTheme] = useState(lightTheme);
  const { todos, removeTodo, toggleTodo, addTodo } = useTodos();
  return (
    <ThemeProvider theme={theme}>
      <BorderedContainer>
        <button
          onClick={() =>
            setTheme(theme === lightTheme ? darkTheme : lightTheme)
          }
        >
          Switch theme
        </button>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/todos"
            render={() => {
              return (
                <TodosPage
                  todos={todos}
                  addTodo={addTodo}
                  toggleTodo={toggleTodo}
                  removeTodo={removeTodo}
                />
              );
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </BorderedContainer>
    </ThemeProvider>
  );
}
