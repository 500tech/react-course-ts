import {find} from 'lodash';
import * as React from 'react';

class App extends React.Component {
  state = {
    data: [
      { id: 0, label: 'forest gump' },
      { id: 1, label: 'wonder woman' },
      { id: 2, label: 'a quiet place' }
    ],
    selectedId: null
  };

  addMovie = () => {
    this.setState({
      data: this.state.data.concat({
        id: this.state.data.length,
        label: `new movie - ${this.state.data.length}`
      })
    });
  };

  removeMovie(id) {
    this.setState({
      data: this.state.data.filter(movie => movie.id !== id)
    });
  }

  clearAll = () => {
    this.setState({
      data: [],
      selectedId: null
    });
  };

  list() {
    const { data } = this.state;

    return (
      <ul>
        {
          data.map(movie => (
            <li key={movie.id} onClick={() => this.setState({ selectedId: movie.id })}>
              <div>{movie.label}</div>
              <div
                className="remove"
                onClick={() => this.removeMovie(movie.id)}>
                remove
              </div>
            </li>
          ))
        }
      </ul>
    );
  }

  emptyMessage() {
    return (
      <div className="empty">
        no movies
      </div>
    );
  }

  rating() {
    return (
      <div className="rating">
        <div className="rating-circle filled" />
        <div className="rating-circle filled" />
        <div className="rating-circle filled" />
        <div className="rating-circle" />
        <div className="rating-circle" />
      </div>
    );
  }

  panel() {
    const { selectedId } = this.state;
    const movie = find(this.state.data, { id: selectedId });

    if (!movie) {
      return null;
    }

    return (
      <div className="panel">
        <div className="panel-title">{movie.label}</div>
        <div className="panel-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat
        </div>
        {this.rating()}
        <div
          className="panel-close"
          onClick={() => this.setState({ selectedId: null })}>
          close panel
        </div>
      </div>
    );
  }

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <div className="movies">
          <div className="header">my favorite movies</div>
          <input type="text" placeholder="new movie" />

          <div className="button" onClick={this.addMovie}>add movie</div>

          {data.length ? this.list() : this.emptyMessage()}

          <div className="filters">
            <div className="clear" onClick={this.clearAll}>clear all</div>
          </div>
        </div>

        {this.panel()}
      </div>
    );
  }
}

export default App;
