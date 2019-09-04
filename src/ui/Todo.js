import React, { memo as memoizedComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NOOP } from 'utils';
import { clickable } from 'ui/mixins';

function BaseTodo({
  todo,
  onToggleTodo = NOOP,
  onRemoveTodo = NOOP,
  className,
}) {
  return (
    <li>
      <span
        className={className}
        onClick={({ ctrlKey, metaKey }) => {
          if (ctrlKey || metaKey) {
            onRemoveTodo(todo.id);
          } else {
            onToggleTodo(todo.id);
          }
        }}
      >
        {todo.title}
      </span>
      <Link to={`/todos/${todo.id}`}>Select</Link>
    </li>
  );
}

const StyledTodo = styled(BaseTodo)`
  ${clickable}
  text-decoration: ${props => (props.todo.completed ? 'line-through' : 'none')};
`;

export const Todo = memoizedComponent(StyledTodo);

/**
 * interfce Todo {
 *   id: number;
 *   title: string;
 *   completed: boolean;
 * }
 */
