import React, { Component, createContext, useContext } from 'react';

const ReduxContext = createContext();
const ReduxProvider = ReduxContext.Provider;
export const ReduxConsumer = ReduxContext.Consumer;
export function useRedux() {
  const reduxCtx = useContext(ReduxContext);
  return reduxCtx;
}

export class ReduxBridge extends Component {
  constructor(props) {
    super(props);
    this.state = props.store.getState();
  }

  _syncReduxState = () => this.setState(this.props.store.getState());

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(this._syncReduxState);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const reduxCtx = {
      state: this.state,
      dispatch: this.props.store.dispatch,
    };
    return (
      <ReduxProvider value={reduxCtx}>{this.props.children}</ReduxProvider>
    );
  }
}
