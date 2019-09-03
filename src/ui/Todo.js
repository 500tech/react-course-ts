import React, { memo as memoizedComponent } from 'react';
import styled from 'styled-components';
import { NOOP } from 'utils';
import {clickable} from 'ui/mixins'

/**
 * interfce Todo {
 *   id: number;
 *   title: string;
 *   completed: boolean;
 * }
 */

// function NeedsA({ a }) {
//   return <p>{a}</p>;
// }

// // <NeedsA a={5} />

// function withA(Component) {
//   return props => <Component {...props} a={5}/>
// }

// const DoesntNeedA = withA(NeedsA);

// // <DoesntNeedA />

function BaseTodo({
  todo,
  onToggleTodo = NOOP,
  onRemoveTodo = NOOP,
  className,
}) {
  return (
    <li
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
    </li>
  );
}

const StyledTodo = styled(BaseTodo)`
  ${clickable}
  text-decoration: ${props => (props.todo.completed ? 'line-through' : 'none')};
`;

export const Todo = memoizedComponent(StyledTodo);
