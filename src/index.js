import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  render() {
    const { titleColor = 'blue' } = this.props;
    return (
      <div className="container">
        <h1 style={{ color: titleColor }}>Hello, world!</h1>
        {/* <Title color={titleColor} text="Hello, world!" /> */}
        <p className="tagline">Tagline</p>
        <button>Click me!</button>
      </div>
    );
  }
}

ReactDOM.render(<App titleColor="red" />, document.querySelector('#root'));
