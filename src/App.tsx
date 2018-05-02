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

  addMovie = () => {
    const { data } = this.state;

    this.setState({
      data: data.concat(`new-movie-${data.length}`)
    });
  };

  removeMovie = pos => {
    const newData = [...this.state.data];

    newData.splice(pos, 1);

    this.setState({ data: newData });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <div className="movies">
          <h1>my favorite movies</h1>
          <div className="button" onClick={this.addMovie}>add movie</div>

          <Movies data={data} removeMovie={this.removeMovie} />
        </div>
      </div>
    );
  }
}
