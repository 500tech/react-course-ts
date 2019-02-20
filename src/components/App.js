import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
// import { CountProvider } from './CountContext';
import { Counter } from './Counter';
import { useRedux } from './ReduxBridge';

const FantasyCounter = styled(Counter)`
  font-family: fantasy;
`;

const StyledButton = styled.button`
  border-radius: 5px;
  transform: rotate(45deg);
  filter: invert(1);
  transition: transform 200ms linear;
  &:hover {
    transform: rotate(0);
  }
  &[disabled] {
    background-color: red;
  }
`;

export function App() {
  const { state, dispatch } = useRedux();
  const input = useRef();
  useEffect(() => {
    input.current.focus();
  }, []);
  const incrementCount = () => dispatch({ type: 'INCREMENT' });
  const decrementCount = () => dispatch({ type: 'DECREMENT' });
  const onChangeCountFromInput = e =>
    dispatch({ type: 'SET_COUNT', payload: parseInt(e.target.value) });
  const disabled = state.count === 0;
  return (
    <div>
      <FantasyCounter/>
      <StyledButton onClick={incrementCount}>+</StyledButton>
      <StyledButton onClick={decrementCount} disabled={disabled}>
        -
      </StyledButton>
      <div>
        <input
          ref={input}
          type="number"
          value={state.count}
          onChange={onChangeCountFromInput}
          placeholder="Set input"
        />
      </div>
    </div>
  );
}