import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends Component {
  render() {
    return <h1>{this.props.count}</h1>;
  }
}

class App extends Component {
  state = {
    counter: {
      count: 0,
    },
  };

  _input = createRef();

  _decBtn = createRef();

  _setCount = count => {
    const { counter } = this.state;
    const newCounter = {
      ...counter,
      count: Math.max(0, count),
    };
    this.setState({
      counter: newCounter,
    }, () => this._setDisable());
  };

  _setDisable = () => {
    const { counter } = this.state;
    const disabled = counter.count === 0;
    this._decBtn.current.disabled = disabled;
  }

  componentDidMount() {
    this._input.current.focus();
    this._setDisable();
  }

  incrementCount = () => {
    this._setCount(this.state.counter.count + 1);
  };

  decrementCount = () => {
    this._setCount(this.state.counter.count - 1);
  };

  onChangeCountFromInput = ({ target }) => {
    const { value } = target;
    this._setCount(value);
  };

  render() {
    const { count } = this.state.counter;
    return (
      <div>
        <Counter count={count} />
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount} ref={this._decBtn}>
          -
        </button>
        <div>
          <input
            ref={this._input}
            type="number"
            value={count}
            onChange={this.onChangeCountFromInput}
            placeholder="Set input"
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
