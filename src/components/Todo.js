import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TodoItem = styled.li`
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
`;

export const TodoType = PropTypes.exact({
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
});

export default function Todo({ todo, toggleDone }) {
  const { done, text } = todo;
  return (
    <TodoItem onClick={toggleDone} done={done}>
      {text}
    </TodoItem>
  );
}

Todo.propTypes = {
  todo: TodoType.isRequired,
  toggleDone: PropTypes.func.isRequired,
};
