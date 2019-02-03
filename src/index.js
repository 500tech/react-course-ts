import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Count({ count }) {
  return <p>{count}</p>;
}

class Counter extends Component {
  state = { count: 0 };
  changeCountBy = changeBy => () =>
    this.setState({
      count: this.state.count + changeBy,
    });
  render() {
    return (
      <div>
        <button
          disabled={this.state.count === 0}
          onClick={this.changeCountBy(-1)}
        >
          -
        </button>
        <Count count={this.state.count} />
        <button onClick={this.changeCountBy(+1)}>+</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
