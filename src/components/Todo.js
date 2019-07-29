import React from 'react';
import styled, { css } from 'styled-components';
import { NOOP } from '../utils';

function BaseTodo({
  todo,
  className,
  onToggleTodo = NOOP,
  onDeleteTodo = NOOP,
}) {
  return (
    <li
      className={className}
      onClick={e => {
        if (e.ctrlKey || e.metaKey) {
          return onDeleteTodo(todo);
        }
        onToggleTodo(todo);
      }}
    >
      {todo.title}
    </li>
  );
}

const strikeThrough = css`
  text-decoration: line-through;
`;

const toBeDone = css`
  font-weight: bold;
`;

export const Todo = styled(BaseTodo)`
  letter-spacing: 1px;
  ${props => (props.todo.completed ? strikeThrough : toBeDone)}
`;
