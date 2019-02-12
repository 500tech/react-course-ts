import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledItem = styled.li`
  text-decoration: ${props => props.textDecoration || 'none'};
`;

function usePrevious(currentValue, initialPreviousValue = null) {
  const ref = useRef(initialPreviousValue);
  useEffect(() => {
    ref.current = currentValue;
  }, [currentValue]);
  return ref.current;
}

export function Todo({ text, done, onToggleTodo, onRemoveTodo }) {
  const prevDone = usePrevious(done, done);
  if (done !== prevDone) {
    console.log({ done, prevDone });
  }

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
