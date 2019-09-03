import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { TodoList } from 'ui/TodoList';
import { TodoAdder } from 'ui/TodoAdder';
import { useTodosService } from 'services/todos';
import { lightTheme as baseTheme } from 'themes';

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
  color: ${props => props.theme.palette.primary};
`;

export function App() {
  const [theme, setTheme] = useState(null);
  const { todos, toggleTodo, removeTodo, addTodo } = useTodosService();
  React.useEffect(() => {
    setTimeout(() => {
      setTheme(baseTheme);
    }, 50);
  }, []);
  if (!theme) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Title>Todo list</Title>
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
      </div>
    </ThemeProvider>
  );
}
