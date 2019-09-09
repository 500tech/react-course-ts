import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App({ color = 'blue', children }) {
  return (
    <div className="main-container">
      <h1 style={{ color }}>Hello, world!</h1>
      <p>{children}</p>
    </div>
  );
}

ReactDOM.render(<App>Yo yo!</App>, document.getElementById('root'));

// React.createElement('div', null, [
//   React.createElement('h1', { style: { color: 'blue' } }, ['Hello, world!']),
//   React.createElement('p', null, ['Yo yo']),
// ]);
