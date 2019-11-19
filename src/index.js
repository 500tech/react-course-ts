import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    const { titleColor="blue" } = this.props;
    return (
      <div>
        <h1 style={{ color: titleColor, backgroundColor: 'yellow' }}>
          Hello, world!
        </h1>
        <p>Tagline</p>
      </div>
    );
  }
}

ReactDOM.render(<App titleColor="red" />, document.querySelector('#root'));
