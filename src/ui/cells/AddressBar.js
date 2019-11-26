import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class BaseAddressBar extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <button onClick={() => this.props.history.goBack()}>Back</button>
        <p>{this.props.location.pathname}</p>
        <button onClick={() => this.props.history.goForward()}>Forward</button>
      </div>
    );
  }
}

// function myWithRouter(Component) {
//   return function Wrapper(props) {
//     return <Route render={rProps =>
//       <Component {...props} {...rProps} />
//     } />;
//   }
// }

export const AddressBar = withRouter(BaseAddressBar);
