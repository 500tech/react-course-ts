import * as React from 'react';
import Button from './common/Button';

export default class Card extends React.Component {
  state = {
    list: ['aaaa', 'bbbb', 'ccccc']
  };

  handleClick = () => {
    const { list } = this.state;

    this.setState({
      list: list.concat(`new item-${list.length}`)
    });
  };

  removeItem(item) {
    this.setState({
      list: this.state.list.filter(it => it !== item)
    });
  }

  render() {
    const { list } = this.state;

    return (
      <div className="card">
        <div className="header">my list</div>

        <Button onClick={this.handleClick}>click here</Button>
        <Button
          onClick={() => this.setState({ list: [] })}>
          clear all
        </Button>
        <ul>
          {
            list.map(item => (
              <li key={item}>
                <div>{item}</div>
                <div onClick={() => this.removeItem(item)}>remove</div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
