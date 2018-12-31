import React, { Component } from 'react';
import withRedux from '../withRedux';
import * as counter from '../store/counter';

export default withRedux(
  class CounterPage extends Component {
    increment = () => this.props.dispatch(counter.increment());

    decrement = () => this.props.dispatch(counter.decrement());

    render() {
      const {
        reduxState: { counter },
      } = this.props;
      return (
        <>
          <button onClick={this.increment}>+</button>
          <p>{counter}</p>
          <button onClick={this.decrement}>-</button>
        </>
      );
    }
  }
);
