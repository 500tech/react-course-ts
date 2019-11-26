import React, { Component, createRef } from 'react';

export class TodoAdder extends Component {
  state = {
    text: '',
  };

  inputRef = createRef();

  updateText = e => {
    this.setState({ text: e.target.value });
  };

  submit = e => {
    e && e.preventDefault();
    const { onAdd } = this.props;
    const { text } = this.state;
    if (text) {
      onAdd && onAdd(text);
      this.setState({ text: '' });
    }
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({ prevProps, prevState });
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          value={this.state.text}
          onChange={this.updateText}
          ref={this.inputRef}
        />
        <button disabled={!this.state.text}>Add</button>
      </form>
    );
  }
}
