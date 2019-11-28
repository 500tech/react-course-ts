import React, { Component, createRef } from 'react';
import { RudeButton } from './common';

export class TodoAdder extends Component {
  state = {
    text: '',
  };

  inputRef = createRef();

  componentDidMount() {
    this.inputRef.current.focus();
    this.setAutosubmit();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.text !== this.state.text) {
      this.setAutosubmit();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  setAutosubmit() {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(this.submit, 3000);
  }

  get canSubmit() {
    const { text } = this.state;
    return text.length > 0 && !text.match(/password/i);
  }

  updateText = e => {
    const { value } = e.target;
    if (value.match(/clear/i)) {
      return this.setState({ text: '' });
    }
    this.setState({ text: value });
  };

  submit = e => {
    e && e.preventDefault();
    const { text } = this.state;
    if (this.canSubmit) {
      this.props.onAdd(text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.submit}>
        <input
          ref={this.inputRef}
          placeholder="Enter todo here..."
          value={text}
          onChange={this.updateText}
        />
        <RudeButton disabled={!this.canSubmit}>Add</RudeButton>
      </form>
    );
  }
}
