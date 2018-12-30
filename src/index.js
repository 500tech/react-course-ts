import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting() {
  return React.createElement('h1', null, `Hello, world!`);
}

ReactDOM.render(
  React.createElement('div', null, [
    // child components
    React.createElement(Greeting),
  ]),
  document.getElementById('root')
);
