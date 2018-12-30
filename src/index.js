import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting({ name = 'stranger' }) {
  return <h1 className="greeting">Hello, {name}!</h1>;
}

// @TODO Make App into a component that doesn't know of Greeting, and accepts it as a prop
function App() {
  return (
    <div className="app-container">
      <Greeting name="foobar" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
