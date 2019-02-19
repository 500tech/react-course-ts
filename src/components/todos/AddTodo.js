import React, { Component, createRef } from 'react';
import { ReduxConsumer } from '../../ReduxBridge';
import { increment } from '../../state/actions/count.actions';

export class AddTodo extends Component {
  state = { text: '' };

  input = createRef();

  componentDidMount() {
    // this.input.current.focus();
  }

  setText = text => this.setState({ text });

  reset = () => this.setText('');

  onTextChange = event => this.setText(event.target.value);

  onAddTodo = () => {
    this.props.addTodo(this.state.text);
    this.reset();
  };

  render() {
    return (
      <ReduxConsumer>
        {({ dispatch }) => (
          <>
            <input
              ref={this.input}
              onChange={this.onTextChange}
              value={this.state.text}
            />
            <button
              disabled={!this.state.text.length}
              onClick={() => {
                dispatch(increment());
                this.onAddTodo();
              }}
            >
              Add
            </button>
          </>
        )}
      </ReduxConsumer>
    );
  }
}
