import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Counter() {
  return null;
}

function App() {
  return <div>
    <Counter count={0} />
    <button>+</button>
    <button>-</button>
  </div>
}

ReactDOM.render(<App />, document.getElementById('root'));
