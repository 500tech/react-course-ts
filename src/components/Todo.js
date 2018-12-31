import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TodoItem = styled.li`
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  color: ${({ active }) => (active ? 'violet' : 'inherit')};
`;

export const TodoType = PropTypes.exact({
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
});

export default function Todo({ todo, toggleDone, active }) {
  const { done, text } = todo;
  return (
    <TodoItem onClick={toggleDone} done={done} active={active}>
      {text}
    </TodoItem>
  );
}

Todo.propTypes = {
  todo: TodoType.isRequired,
  active: PropTypes.bool,
  toggleDone: PropTypes.func.isRequired,
};
