import React, { Component } from 'react';
import getDisplayName from 'react-display-name';
import store, { init } from './store';

export default WrappedComponent =>
  class ReduxWrapper extends Component {
    static displayName = `Redux(${getDisplayName(WrappedComponent)})`;

    state = {
      reduxState: null,
    };

    componentDidMount() {
      this._unsubscribe = store.subscribe(this.hookIntoState);
      store.dispatch(init());
    }

    componentWillUnmount() {
      this._unsubscribe();
    }

    hookIntoState = () => this.setState({ reduxState: store.getState() });

    render() {
      if (!this.state.reduxState) {
        return null;
      }
      return (
        <WrappedComponent
          reduxState={this.state.reduxState}
          dispatch={store.dispatch}
          {...this.props}
        />
      );
    }
  };
