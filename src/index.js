import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// @TODO what if we want to control the size of the greeting?
function Greeting({ name = 'stranger' }) {
  return React.createElement(
    'h1',
    { className: 'greeting' },
    `Hello, ${name}!`
  );
}

ReactDOM.render(
  React.createElement('div', null, [
    // child components
    React.createElement(Greeting, { name: 'foobar' }),
  ]),
  document.getElementById('root')
);
