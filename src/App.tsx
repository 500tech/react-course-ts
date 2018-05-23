import * as React from 'react';
import styled from 'styled-components';
import List from './components/List';

class App extends React.Component {
  state = {
    items: [
      { id: 0, label: 'item 01' },
      { id: 1, label: 'item 02' }
    ]
  };

  removeItem = (id) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };

  addItem = () => {
    const { items } = this.state;

    this.setState({
      items: items.concat({
        id: items.length,
        label: `untitled item ${items.length}`
      })
    });
  };

  render() {
    const { items } = this.state;

    return (
      <div>
        <Navigation>hello guest</Navigation>
        <List
          addItem={this.addItem}
          removeItem={this.removeItem}
          items={items}
        />
      </div>
    );
  }
}

export default App;

const Navigation = styled.div`
  width: 100vw;
  height: 60px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding: 0 50px;
  text-transform: capitalize;
  font-weight: 300;
`;
