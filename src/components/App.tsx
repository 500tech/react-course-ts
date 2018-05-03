import * as React from 'react';
import Button from './common/Button';

class App extends React.Component {
  state = {
    list: ['aaaa', 'bbbb', 'ccccc']
  };

  handleClick = () => {
    const { list } = this.state;

    this.setState({
      list: list.concat(`new item-${list.length}`)
    });
  };

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <div className="card">
          <div className="header">my list</div>

          <Button onClick={this.handleClick}>click here</Button>

          <ul>
            {
              list.map(item => (<li key={item}>{item}</li>))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
