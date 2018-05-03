import * as React from 'react';
import Button from './common/Button';
import Input from './common/Input';

interface ComponentState {
  list: string[],
  textVal: string
}

export default class Card extends React.Component<{}, ComponentState> {
  input: HTMLInputElement | null;

  state = {
    list: ['aaaa', 'bbbb', 'ccccc'],
    textVal: 'foo'
  };

  handleClick = () => {
    const { list } = this.state;

    if (this.input) {
      this.setState({
        list: list.concat(this.input.value)
      });
    }
  };

  removeItem(item) {
    this.setState({
      list: this.state.list.filter(it => it !== item)
    });
  }

  handleRef = el => {
    if (el) {
      this.input = el;
    }
  };

  render() {
    const { list } = this.state;

    return (
      <div className="card">
        <div className="header">my list</div>

        <Input onRef={this.handleRef} />

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
