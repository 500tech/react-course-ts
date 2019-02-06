import React, { Component, createRef } from 'react';

export class AddTodo extends Component {
  state = {
    draft: '',
  };

  componentDidMount() {
    this._input.current.focus();
  }

  _input = createRef();

  onDraftChange = event => {
    const { target } = event;
    const { value } = target;
    this.setState({ draft: value });
  };

  addTodo = () => {
    this.props.onAddTodo(this.state.draft);
    this.setState({ draft: '' });
  };

  render() {
    return (
      <div>
        <input
          ref={this._input}
          value={this.state.draft}
          onChange={this.onDraftChange}
        />
        <button disabled={this.state.draft === ''} onClick={this.addTodo}>
          Add Me!
        </button>
      </div>
    );
  }
}
