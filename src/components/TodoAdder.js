import React, { createRef } from 'react';
import styled from 'styled-components';
import { NOOP } from '../utils';

export class TodoAdder extends React.PureComponent {
  state = {
    text: '',
  };

  inputRef = createRef();

  startTimer() {
    this.autoSubmitTimer = setTimeout(this.submit, 3000);
  }

  clearTimer() {
    clearTimeout(this.autoSubmitTimer);
  }

  autoFocusInput() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  componentDidMount() {
    this.autoFocusInput();
    this.startTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  resetTimerOnTextChange(_prevProps, prevState) {
    if (this.state.text !== prevState.text) {
      this.clearTimer();
      this.startTimer();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.resetTimerOnTextChange(prevProps, prevState);
  }

  submit = e => {
    e && e.preventDefault();
    if (this.state.text) {
      const { onAddTodo = NOOP } = this.props;
      onAddTodo(this.state.text);
      this.setState({ text: '' });
    }
  };

  setText = e => this.setState({ text: e.target.value });

  render() {
    console.log('render todo adder');
    return (
      <form onSubmit={this.submit}>
        <Input
          ref={this.inputRef}
          name="todoText"
          type="text"
          value={this.state.text}
          onChange={this.setText}
        />
        <Button disabled={this.state.text.length === 0}>Add</Button>
      </form>
    );
  }
}

const Button = styled.button`
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.primaryText};
  &:disabled {
    opacity: 0.3;
    background-color: transparent;
    border: none;
  }
`;

const Input = styled.input`
  &:focus {
    outline-color: ${props => props.theme.palette.primary};
  }
`;
