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

  onKeyPress = ({ key }) => {
    if (key.toLowerCase() === 'enter' && this.state.draft) {
      this.addTodo();
    }
  };

  render() {
    return (
      <div>
        <input
          ref={this._input}
          value={this.state.draft}
          onChange={this.onDraftChange}
          onKeyPress={this.onKeyPress}
        />
        <button disabled={this.state.draft === ''} onClick={this.addTodo}>
          Add Me!
        </button>
      </div>
    );
  }
}
