import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { TodoList } from 'ui/TodoList';
import { TodoAdder } from 'ui/TodoAdder';
import { useTodosService } from 'services/todos';
import { lightTheme, darkTheme } from 'themes';

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

export function App() {
  const [theme, setTheme] = useState(lightTheme);
  const { todos, toggleTodo, removeTodo, addTodo } = useTodosService();
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Title>Todo list</Title>
        <select
          onChange={e =>
            setTheme(e.target.value === 'light' ? lightTheme : darkTheme)
          }
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
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
      </Page>
    </ThemeProvider>
  );
}
