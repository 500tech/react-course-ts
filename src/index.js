import React from 'react';
import ReactDOM from 'react-dom';

function App({ color="pink" }) {
  return (
    <div>
      <h1 style={{ color }}>Hello, world!</h1>
      <p>Hello, {3 + 4}!</p>
    </div>
  );
}

ReactDOM.render(<App color="blue" />, document.getElementById('root'));
