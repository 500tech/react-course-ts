import * as React from 'react';

class App extends React.Component {
  state = {
    hasError: false
  };

  componentDidMount() {
    setTimeout(() => {
      throw new Error('An error!');
    }, 3000);
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    return (
      <div className="App">
        {hasError ? 'ERROR!' : 'hello world!'}
      </div>
    );
  }
}

export default App;
