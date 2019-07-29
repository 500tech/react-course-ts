import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { NOOP } from '../utils';

function BaseTodo({
  todo,
  className,
  onToggleTodo = NOOP,
  onDeleteTodo = NOOP,
}) {
  return (
    <li className={className}>
      <span
        onClick={e => {
          if (e.ctrlKey || e.metaKey) {
            return onDeleteTodo(todo);
          }
          onToggleTodo(todo);
        }}
      >
        {todo.title}
      </span>
      <Link to={`/todos/${todo.id}`}>Meow</Link>
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
  color: ${props => props.theme.palette.itemColor};
  span {
    ${props => (props.todo.completed ? strikeThrough : toBeDone)}
  }
`;
