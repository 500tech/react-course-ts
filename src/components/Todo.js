import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TodoItem = styled.li`
user-select: none;
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  color: ${({ active }) => (active ? 'violet' : 'inherit')};
`;

export const TodoType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
});

export default function Todo({ todo, active, ...props }) {
  const { done, text } = todo;
  return (
    <TodoItem done={done} active={active} {...props}>
      {text}
    </TodoItem>
  );
}

Todo.propTypes = {
  todo: TodoType.isRequired,
  active: PropTypes.bool,
};
