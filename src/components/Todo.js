import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { NOOP } from '../utils';

function BaseTodo({
  todo,
  className,
  onToggleTodo = NOOP,
  onRemoveTodo = NOOP,
}) {
  return (
    <li className={className}>
      <span
        onClick={e => (e.metaKey ? onRemoveTodo(todo) : onToggleTodo(todo))}
      >
        {todo.text}
      </span>
      <Link to={`/todos/${todo.id}`}>Select</Link>
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
  ${props => (props.todo.done ? doneTodo : undoneTodo)}
`;
