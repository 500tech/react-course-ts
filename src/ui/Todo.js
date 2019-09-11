import React from 'react';
import styled from 'styled-components';
import { NOOP } from 'utils';
import { useTheme } from 'services/theme';

function BaseTodo({
  className,
  todo,
  onToggleTodo = NOOP,
  onRemoveTodo = NOOP,
}) {
  const { theme } = useTheme();
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
      <span>And the primary color is: {theme.palette.primary}</span>
    </li>
  );
}

export const Todo = styled(BaseTodo)`
  span:first-child {
    text-decoration: ${props =>
      props.todo.completed ? 'line-through' : 'none'};
  }
`;
