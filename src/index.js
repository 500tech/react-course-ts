import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const GREETING_SIZES = {
  TITLE: 'h1',
  BIG: 'h2',
  MEDIUM: 'h3',
  SMALL: 'h5',
};

function Greeting({ name = 'stranger', size = GREETING_SIZES.TITLE }) {
  return React.createElement(
    size,
    { className: 'greeting' },
    `Hello, ${name}!`
  );
}

Object.assign(Greeting, GREETING_SIZES);

ReactDOM.render(
  React.createElement('div', null, [
    // child components
    React.createElement(Greeting, { name: 'foobar', size: Greeting.MEDIUM }),
  ]),
  document.getElementById('root')
);
