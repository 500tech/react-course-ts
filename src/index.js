import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App({ greeting = 'Hello!' }) {
  return (
    <div className="container">
      <h1>
        <span>{greeting}</span>
      </h1>
    </div>
  );
}

ReactDOM.render(<App greeting="???" />, document.getElementById('root'));
