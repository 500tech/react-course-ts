import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Form = styled.form`
  display: flex;

  input {
    width: 150px;
  }
`;

class BaseAddressBar extends React.Component {
  state = {
    url: this.props.location.pathname,
  };

  setUrl(url) {
    this.setState({ url });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setUrl(this.props.location.pathname);
    }
  }

  submit = e => {
    e.preventDefault();
    this.props.history.push(this.state.url);
  };

  onChange = e => {
    this.setUrl(e.target.value);
  };

  render() {
    return (
      <Form onSubmit={this.submit}>
        <button type="button" onClick={this.props.history.goBack}>
          Back
        </button>
        <input value={this.state.url} onChange={this.onChange} />
        <button type="button" onClick={this.props.history.goForward}>
          Forward
        </button>
      </Form>
    );
  }
}

export const AddressBar = withRouter(BaseAddressBar);
