import React, { Component } from 'react';

export class Counter extends Component {
  render() {
    return <h1>{this.props.count}</h1>;
  }
}
