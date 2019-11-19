import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
  render() {
    const { children, color } = this.props;
    return <h1 style={{ color, backgroundColor: 'yellow' }}>{children}</h1>;
  }
}

class App extends Component {
  render() {
    const { titleColor = 'blue' } = this.props;
    return (
      <div>
        {/* <h1 style={{ color: titleColor, backgroundColor: 'yellow' }}>
          Hello, world!
        </h1> */}
        <Title color={titleColor}>Have a great evening!</Title>
        <p>Tagline</p>
      </div>
    );
  }
}

ReactDOM.render(<App titleColor="red" />, document.querySelector('#root'));
