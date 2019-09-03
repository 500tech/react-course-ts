import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoList } from 'ui/TodoList';
import { TodoAdder } from 'ui/TodoAdder';
import { useTodosService } from 'services/todos';

const Container = styled.div`
  border: 1px solid silver;
  padding: 10px;
  background-color: rgba(255, 0, 0, 0.2);

  p {
    color: silver;

    &:hover {
      color: red;
    }
  }
`;

function NoItemsEmptyState() {
  return (
    <Container>
      <p>Oh noes, no items yet! Please create one :)</p>
    </Container>
  );
}

export function App({ initialColor = 'pink' }) {
  const [color, setColor] = useState(initialColor);
  const { todos, toggleTodo, removeTodo, addTodo } = useTodosService();
  return (
    <div className="container">
      <h1 onClick={() => setColor('green')} style={{ color }}>
        Todo list
      </h1>
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
  );
}
