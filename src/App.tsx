import * as React from 'react';

const List = ({ data, renderItem }) => (
  data.map(item => renderItem(item))
);

class App extends React.Component {
  state = {
    data: [
      { id: 0, label: 'hello world!' }
    ]
  };

  renderItem = (item) => {
    return (
      <li key={item.id}>{item.label}</li>
    );
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <List data={data} renderItem={this.renderItem} />
      </div>
    );
  }
}

export default App;
