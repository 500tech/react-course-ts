import * as React from 'react';
import Movies from './components/Movies';

export default class App extends React.Component {
  state = {
    data: [
      "Avatar",
      "Wonder Women",
      "Titanic"
    ]
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>my favorite movies</h1>

        <Movies data={data} />
      </div>
    );
  }
}
