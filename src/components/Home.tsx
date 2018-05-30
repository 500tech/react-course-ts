import {find, findIndex} from 'lodash';
import * as React from 'react';

import { executeQuery } from '../utils/api';
import Movies from './Movies';
import Panel from './Panel';
import {createMovie, fetchMovies, removeAllMovies, removeMovie, updateMovie} from "../queries/movies";

interface ComponentState {
  data: Array<{
    label: string,
    rating: number,
    id: number
  }>,
  inputVal: string,
  selectedId: null | number
}

interface ComponentProps {
  match: any
}

class Home extends React.Component<ComponentProps, ComponentState> {
  state = {
    data: [],
    inputVal: '',
    selectedId: null
  };

  componentDidMount() {
    executeQuery(fetchMovies)
        .then((payload) => {
          this.setState({ data: payload.data.allMovies});
        });

    if (typeof this.props.match.params.id === 'string') {
      this.setState({ selectedId: parseInt(this.props.match.params.id, 10) });
    }
  }

  addMovie = () => {
    const { inputVal } = this.state;

    executeQuery(createMovie, {
      id: this.state.data.length,
      label: inputVal || `new movie - ${this.state.data.length}`,
      rating: 1,
      description: 'movie description'
    }).then((payload) => {
      this.setState({ data: [
            ...this.state.data,
            payload.data.createMovie
        ]})
    });
  };

  updateRating = (movieId, val) => {
    const newData = [...this.state.data];
    const movieIndex = findIndex(newData, { id: movieId });

    if (movieIndex > -1) {
      const movie = { ...newData[movieIndex], rating: val, description: 'fake description' };
      executeQuery(updateMovie, { ...movie })
          .then((payload) => {
            newData[movieIndex] = payload.data.updateMovie;
            this.setState({
              data: newData
            })
          });
    }

    this.setState({ data: newData });
  };

  removeMovie = (id) => {
    this.setState({
      data: this.state.data.filter(movie => movie.id !== id)
    });
    executeQuery(removeMovie, { id });
  };

  clearAll = () => {
    const movieIds = this.state.data.map(movie => movie.id);
    executeQuery(removeAllMovies(movieIds))

    this.setState({
      data: [],
      selectedId: null
    });
  };

  clearSelected = () => {
    this.setState({ selectedId: null });
  };

  updateValue = (e) => {
    const inputVal = e.target.value;

    this.setState({
      inputVal
    });
  };

  render() {
    const { data, selectedId, inputVal } = this.state;
    const activeMovie = find(this.state.data, { id: selectedId });

    return (
      <div className="app">
        <Movies
          data={data}
          inputVal={inputVal}
          addMovie={this.addMovie}
          clearAll={this.clearAll}
          removeMovie={this.removeMovie}
          updateValue={this.updateValue}
          selectMovie={id => this.setState({ selectedId: id })} />

        <Panel
          movie={activeMovie}
          updateRating={this.updateRating}
          clearSelected={this.clearSelected} />
      </div>
    );
  }
}

export default Home;
