import * as React from 'react';
import Movies from './components/Movies';

export default class App extends React.Component {
  input: any;

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
      data: data.concat(this.input.value || `new-movie-${data.length}`)
    }, () => {
      this.input.value = '';
    });
  };

  removeMovie = pos => {
    const newData = [...this.state.data];

    newData.splice(pos, 1);

    this.setState({ data: newData });
  };

  setRef = el => {
    if (!el) {
      return;
    }

    this.input = el;
  };

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <div className="movies">
          <h1>my favorite movies</h1>

          <input type="text" placeholder="new movie" ref={this.setRef} />

          <div className="button" onClick={this.addMovie}>add movie</div>

          <Movies data={data} removeMovie={this.removeMovie} />
        </div>
      </div>
    );
  }
}
