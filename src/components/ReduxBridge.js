import { Component } from 'react';

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
    console.log(this.state);
    return this.props.children;
  }
}