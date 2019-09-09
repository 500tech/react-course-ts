import React, { useState } from 'react';
import { getRandomRGB } from 'utils';
import { Title, BorderedContainer } from 'ui/common';
import { TodoList } from 'ui/TodoList';
import { useTodos } from 'services/todos';

export function App({ initialColor = 'blue', children }) {
  const [color, setColor] = useState(initialColor);
  const { todos, removeTodo, toggleTodo } = useTodos();
  function changeColor() {
    setColor(getRandomRGB());
  }
  return (
    <BorderedContainer>
      <Title color={color} onChangeColor={changeColor}>
        Hello, world!
      </Title>
      {children ? <p>{children}</p> : null}
      {children && <p>{children}</p>}
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onRemoveTodo={removeTodo}
      />
    </BorderedContainer>
  );
}
