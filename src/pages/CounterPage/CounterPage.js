import React, { Component } from 'react';

export default (class CounterPage extends Component {
  increment = () => this.props.increment();

  decrement = () => this.props.decrement();

  render() {
    const { counter } = this.props;
    return (
      <>
        <button onClick={this.increment}>+</button>
        <p>{counter}</p>
        <button onClick={this.decrement}>-</button>
      </>
    );
  }
});
