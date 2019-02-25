import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledItem = styled.li`
  text-decoration: ${props => props.textDecoration || 'none'};
`;

export function Todo({ title, completed, onToggleTodo, onRemoveTodo }) {
  return (
    <StyledItem
      onClick={onToggleTodo}
      onDoubleClick={onRemoveTodo}
      textDecoration={completed ? 'line-through' : undefined}
    >
      {title}
    </StyledItem>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggleTodo: PropTypes.func,
  onRemoveTodo: PropTypes.func,
};

export default Todo;
