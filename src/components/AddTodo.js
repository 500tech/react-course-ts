import React, { Component, createRef } from 'react';

export default class AddTodo extends Component {
  state = {
    draftValue: '',
  };

  constructor(props) {
    super(props);
    this._draftRef = createRef();
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this._draftRef.current.focus();
    }
  }

  changeDraftValue = ({ target: { value: draftValue } }) =>
    this.setState({ draftValue });

  submitOnEnterPress = ({ key }) => {
    if (key === 'Enter' && this.state.draftValue) {
      this.addTodo();
    }
  };

  addTodo = () => {
    const { draftValue } = this.state;
    const todo = { text: draftValue, done: false };
    this.setState({ draftValue: '' });
    this.props.onAddTodo(todo);
  };

  render() {
    const { draftValue } = this.state;
    return (
      <>
        <input
          ref={this._draftRef}
          type="text"
          placeholder="What should I do?"
          value={draftValue}
          onChange={this.changeDraftValue}
          onKeyPress={this.submitOnEnterPress}
        />
        <button onClick={this.addTodo} disabled={!draftValue}>
          Add
        </button>
      </>
    );
  }
}
