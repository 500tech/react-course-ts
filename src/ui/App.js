import React, { useState, useMemo } from 'react';
import { getRandomRGB } from 'utils';
import { Title, BorderedContainer } from 'ui/common';
import { TodoList } from 'ui/TodoList';
import { TodoAdder } from 'ui/TodoAdder';
import { useTodos } from 'services/todos';

export function App({ initialColor = 'blue' }) {
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
    <BorderedContainer>
      <Title color={color} onClick={changeColor}>
        Todo List ({pendingTodosCount})
      </Title>
      <TodoAdder onAddTodo={addTodo} autoSubmit={pendingTodosCount === 0} />
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onRemoveTodo={removeTodo}
      />
    </BorderedContainer>
  );
}
