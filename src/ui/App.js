import React, { useState } from 'react';
import { getRandomRGB } from 'utils';
import { Title, BorderedContainer } from 'ui/common';
import { TodoList } from 'ui/TodoList';
import { TodoAdder } from 'ui/TodoAdder';
import { useTodos } from 'services/todos';

export function App({ initialColor = 'blue' }) {
  const [color, setColor] = useState(initialColor);
  const { todos, removeTodo, toggleTodo, addTodo } = useTodos();
  function changeColor() {
    setColor(getRandomRGB());
  }
  return (
    <BorderedContainer>
      <Title color={color} onChangeColor={changeColor}>
        Hello, world!
      </Title>
      <TodoAdder onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onRemoveTodo={removeTodo}
      />
    </BorderedContainer>
  );
}
