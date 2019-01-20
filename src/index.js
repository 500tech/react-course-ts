import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Counter({ count }) {
  return <h1>{count}</h1>;
}

function decrementCount(currentCount) {
  console.log(currentCount - 1);
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

  render() {
    const { count } = this.state.counter;
    return (
      <div>
        <Counter count={count} />
        <button onClick={this.incrementCount}>+</button>
        <button onClick={() => decrementCount(count)}>-</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
