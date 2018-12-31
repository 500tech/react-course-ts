import React, { Component } from 'react';
import withRedux from '../withRedux';

// @TODO hook this up to redux as well
export default withRedux(
  class CounterPage extends Component {
    render() {
      return (
        <>
          <button>+</button>
          <p>0</p>
          <button>-</button>
        </>
      );
    }
  }
);
