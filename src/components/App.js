import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { CountProvider } from './CountContext';
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

export class App extends Component {
  state = {
    counter: {
      count: 0,
    },
  };

  _input = createRef();

  _setCount = count => {
    const { counter } = this.state;
    const newCounter = {
      ...counter,
      count: Math.max(0, count),
    };
    this.setState({
      counter: newCounter,
    });
  };

  componentDidMount() {
    this._input.current.focus();
  }

  incrementCount = () => {
    this._setCount(this.count + 1);
  };

  decrementCount = () => {
    this._setCount(this.count - 1);
  };

  onChangeCountFromInput = ({ target }) => {
    const { value } = target;
    this._setCount(value);
  };

  get count() {
    const { count } = this.state.counter;
    return count;
  }

  get disabled() {
    return !this.count;
  }

  render() {
    const { count } = this;
    return (
      <CountProvider value={count}>
        <div>
          <FantasyCounter />
          <StyledButton onClick={this.incrementCount}>+</StyledButton>
          <StyledButton onClick={this.decrementCount} disabled={this.disabled}>
            -
          </StyledButton>
          <div>
            <input
              ref={this._input}
              type="number"
              value={count}
              onChange={this.onChangeCountFromInput}
              placeholder="Set input"
            />
          </div>
        </div>
      </CountProvider>
    );
  }
}
