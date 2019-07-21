import React from 'react';
import ReactDOM from 'react-dom';

function App({ color = 'pink', children }) {
  return (
    <div>
      <h1 style={{ color }}>Hello, world!</h1>
      <p>{children}</p>
    </div>
  );
}

ReactDOM.render(
  <App color="blue">
    Display this
  </App>,
  document.getElementById('root')
);
