import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Counter } from './Counter';

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

export function BaseApp({ count, incrementCount, decrementCount, setCount }) {
  const input = useRef();
  useEffect(() => {
    input.current.focus();
  }, []);
  const onChangeCountFromInput = e => setCount(parseInt(e.target.value));
  const disabled = count === 0;
  return (
    <div>
      <FantasyCounter />
      <StyledButton onClick={incrementCount}>+</StyledButton>
      <StyledButton onClick={decrementCount} disabled={disabled}>
        -
      </StyledButton>
      <div>
        <input
          ref={input}
          type="number"
          value={count}
          onChange={onChangeCountFromInput}
          placeholder="Set input"
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCount() {
      dispatch({ type: 'INCREMENT' });
    },
    decrementCount() {
      dispatch({ type: 'DECREMENT' });
    },
    setCount(count) {
      dispatch({ type: 'SET_COUNT', payload: count });
    },
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export const App = connector(BaseApp);
