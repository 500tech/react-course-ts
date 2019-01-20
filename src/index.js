import React, { Component } from 'react';
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

  _setCount = count =>  {
    const { counter } = this.state;
    const newCounter = {
      ...counter,
      count: Math.max(0, count),
    };
    this.setState({
      counter: newCounter,
    });
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
        <button onClick={this.decrementCount}>-</button>
        <div>
          <input
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
