import {find, findIndex} from 'lodash';
import * as React from 'react';

import { executeQuery } from '../utils/api';
import Movies from './Movies';
import Panel from './Panel';
import {fetchMovies} from "../queries/movies";

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

    this.setState({
      data: this.state.data.concat({
        id: this.state.data.length,
        label: inputVal || `new movie - ${this.state.data.length}`,
        rating: 1
      })
    });
  };

  updateRating = (movieId, val) => {
    const newData = [...this.state.data];
    const movieIndex = findIndex(newData, { id: movieId });

    if (movieIndex > -1) {
      newData[movieIndex] = Object.assign({}, newData[movieIndex], {
        rating: val
      });
    }

    this.setState({ data: newData });
  };

  removeMovie = (id) => {
    this.setState({
      data: this.state.data.filter(movie => movie.id !== id)
    });
  };

  clearAll = () => {
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
