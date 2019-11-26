import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class PageNotFound extends Component {
  state = {
    timeToRedirect: 3,
  };

  componentDidMount() {
    this.intervalIdForRedirectTimerSoYouAreFineWithIt = setInterval(() => {
      this.setState(currentState => ({
        timeToRedirect: currentState.timeToRedirect - 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalIdForRedirectTimerSoYouAreFineWithIt);
  }

  render() {
    const { timeToRedirect } = this.state;
    const { location } = this.props;
    if (!timeToRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <h1>
        <code>{location.pathname}</code> Not found :(
        <br />
        <small>Will redirect in {timeToRedirect}</small>
      </h1>
    );
  }
}
