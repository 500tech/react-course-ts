import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { getRandomRGB } from 'utils';
import { Title, BorderedContainer } from 'ui/common';
import { TodoList } from 'ui/TodoList';
import { TodoAdder } from 'ui/TodoAdder';
import { useTodos } from 'services/todos';
import { darkTheme, lightTheme } from 'themes';

export function App({ initialColor = 'blue' }) {
  const [theme, setTheme] = useState(lightTheme);
  const [color, setColor] = useState(initialColor);
  const { todos, removeTodo, toggleTodo, addTodo } = useTodos();
  const pendingTodosCount = useMemo(
    () => todos.filter(todo => !todo.completed).length,
    [todos]
  );
  function changeColor() {
    setColor(getRandomRGB());
  }
  return (
    <ThemeProvider theme={theme}>
      <BorderedContainer>
        <Title color={color} onClick={changeColor}>
          Todo List ({pendingTodosCount})
        </Title>
        <button
          onClick={() =>
            setTheme(theme === lightTheme ? darkTheme : lightTheme)
          }
        >
          Switch theme
        </button>
        <TodoAdder onAddTodo={addTodo} autoSubmit={pendingTodosCount === 0} />
        <TodoList
          todos={todos}
          onToggleTodo={toggleTodo}
          onRemoveTodo={removeTodo}
        />
      </BorderedContainer>
    </ThemeProvider>
  );
}
