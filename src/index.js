import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting({ user = 'guest' }) {
  return <h1>Hello, {user}!</h1>;
}

function App({ children, background = 'yellow' }) {
  return (
    <div
      className="coolvision"
      style={{
        background,
      }}
    >
      {children}
    </div>
  );
}

ReactDOM.render(
  <App>
    <Greeting user="foobar" />
  </App>,
  document.getElementById('root')
);
