import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class PageNotFound extends Component {
  state = {
    ttr: 3,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ ttr: this.state.ttr - 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { ttr } = this.state;

    if (!ttr) {
      return <Redirect to="/" />;
    }

    return (
      <h1>
        Page <code>{this.props.location.pathname}</code> not found :(
        <p>Redirect in: {ttr}...</p>
      </h1>
    );
  }
}
