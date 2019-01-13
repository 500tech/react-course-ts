import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting({ name = 'stranger' }) {
  return <h1 className="greeting">Hello, {name}!</h1>;
}

function App({ children = <p>meow!!!</p> }) {
  return <div className="app-container">{children}</div>;
}

ReactDOM.render(
  <App>
    <Greeting name={'foobar'} />
  </App>,
  document.getElementById('root')
);
