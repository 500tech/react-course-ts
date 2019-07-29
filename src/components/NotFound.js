import React from 'react';
import { Redirect } from 'react-router-dom';

export class PageNotFound extends React.Component {
  state = { redirect: false };

  componentDidMount() {
    this.timer = setTimeout(() => this.setState({ redirect: true }), 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { location } = this.props;
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h3>
          Page <code>{location.pathname}</code> not found
        </h3>
        <h4>Redirecting you to home...</h4>
      </div>
    );
  }
}
