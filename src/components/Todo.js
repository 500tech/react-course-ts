import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledItem = styled.li`
  text-decoration: ${props => props.textDecoration || 'none'};
`;

export function Todo({ text, done, onToggleTodo, onRemoveTodo }) {
  return (
    <StyledItem
      onClick={onToggleTodo}
      onDoubleClick={onRemoveTodo}
      textDecoration={done ? 'line-through' : undefined}
    >
      {text}
    </StyledItem>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onToggleTodo: PropTypes.func,
  onRemoveTodo: PropTypes.func,
};
