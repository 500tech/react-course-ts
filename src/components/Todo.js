import React from 'react';
import styled from 'styled-components';

const TodoItem = styled.li`
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
`;

export default function Todo({ text, isDone, toggleDone }) {
  return (
    <TodoItem onClick={toggleDone} done={isDone}>
      {text}
    </TodoItem>
  );
}
