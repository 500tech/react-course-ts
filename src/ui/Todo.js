import React, { memo } from 'react';
import styled from 'styled-components';
import { NOOP } from 'utils';

function BaseTodo({
  className,
  todo,
  onToggleTodo = NOOP,
  onRemoveTodo = NOOP,
}) {
  return (
    <li
      className={className}
      onClick={e => {
        if (e.metaKey) {
          onRemoveTodo(todo.id);
        } else {
          onToggleTodo(todo.id);
        }
      }}
    >
      <span>{todo.title}</span>
    </li>
  );
}

const StyledTodo = styled(BaseTodo)`
  span:first-child {
    text-decoration: ${props =>
      props.todo.completed ? 'line-through' : 'none'};
  }
`;

export const Todo = memo(StyledTodo);
