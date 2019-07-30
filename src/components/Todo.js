import React from 'react';
import styled, { css } from 'styled-components';
import { NOOP } from '../utils';

function BaseTodo({
  todo,
  className,
  onToggleTodo = NOOP,
  onRemoveTodo = NOOP,
}) {
  return (
    <li
      className={className}
      onClick={() => onToggleTodo(todo)}
      onDoubleClick={() => onRemoveTodo(todo)}
    >
      {todo.text}
    </li>
  );
}

const doneTodo = css`
  text-decoration: line-through;
`;

const undoneTodo = css`
  font-weight: bold;
`;

export const Todo = styled(BaseTodo)`
  ${props => props.todo.done ? doneTodo : undoneTodo}
`;
