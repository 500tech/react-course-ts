import React, { Component, createContext } from 'react';

const ReduxContext = createContext();
export const ReduxConsumer = ReduxContext.Consumer;

export class ReduxBridge extends Component {
  constructor(...args) {
    super(...args);
    this.state = this.props.store.getState();
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() =>
      this.setState(this.props.store.getState())
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { state } = this;
    const { dispatch } = this.props.store;
    const reduxCtx = { state, dispatch };
    return (
      <ReduxContext.Provider value={reduxCtx}>
        {this.props.children}
      </ReduxContext.Provider>
    );
  }
}
