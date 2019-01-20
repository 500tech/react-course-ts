import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends Component {
  componentDidMount() {
    this._intervalId = setInterval(() => console.log('Sheket'), 100);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

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

  incrementCount = () => {
    const { counter } = this.state;
    const newCounter = {
      ...counter,
      count: counter.count + 1,
    };
    this.setState({
      counter: newCounter,
    });
  };

  decrementCount = () => {
    const { counter } = this.state;
    const newCounter = {
      ...counter,
      count: Math.max(0, counter.count - 1),
    };
    this.setState({
      counter: newCounter,
    });
  };

  render() {
    const { count } = this.state.counter;
    return (
      <div>
        {count === 5 ? null : <Counter count={count} />}
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
