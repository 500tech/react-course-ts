import {find, findIndex, merge} from 'lodash';
import * as React from 'react';

import Movies from './Movies';
import Panel from './Panel';

import {
  createMovie, createMovieParams,
  fetchMovieDetails,
  fetchMovies, removeAllMovies,
  removeMovie,
  removeMovieParams,
  updateMovie, updateMovieParams
} from '../queries/movies';
import api from '../utils/api';

interface ComponentState {
  data: Array<{
    label: string,
    rating?: number,
    id: number,
    description?: string
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
    api.executeQuery(fetchMovies)
        .then((response) => {
          this.setState({data: response.data.allMovies});
        });

    if (typeof this.props.match.params.id === 'string') {
      const selectedId = this.props.match.params.id;
      this.fetchMovieExtraDetails(selectedId).then(() => {
        console.log(this.state.data);
        this.setState({selectedId});
      });
    }
  }

  addMovie = () => {
    const {inputVal} = this.state;

    api.executeQuery<createMovieParams>(createMovie, {
      id: String(this.state.data.length),
      label: inputVal || `new movie - ${this.state.data.length}`,
      rating: 1,
      description: 'details about movie'
    }).then((payload) => {
      this.setState({
        data: [...this.state.data, payload.data.createMovie]
      });
    });


  };

  updateRating = (movieId, val) => {
    const newData = [...this.state.data];
    const movieIndex = findIndex(this.state.data, {id: movieId});

    if (movieIndex > -1) {
      const movie = this.state.data[movieIndex];

      api.executeQuery<updateMovieParams>(updateMovie, {...movie, rating: val})
          .then((payload) => {
            newData[movieIndex] = merge(newData[movieIndex], payload.data.updateMovie);
            this.setState({
              data: newData
            })
          })
    }
  };

  removeMovie = (id) => {
    this.setState({
      data: this.state.data.filter(movie => movie.id !== id)
    });
    api.executeQuery<removeMovieParams>(removeMovie, { id });
  };

  clearAll = () => {
    const movieIds = this.state.data.map((movie) => movie.id);
    api.executeQuery(removeAllMovies(movieIds));

    this.setState({
      data: [],
      selectedId: null
    });
  };

  clearSelected = () => {
    this.setState({selectedId: null});
  };

  selectMovie = (id) => {
    const movie = find(this.state.data, {id});

    if (!movie || !movie.description) {
      this.fetchMovieExtraDetails(id);
    }

    this.setState({selectedId: id});
  };

  fetchMovieExtraDetails(id) {
    return api.executeQuery(fetchMovieDetails, {id})
        .then((movieDetails) => {
          const movies = this.state.data.map((movie) => {
            if (movie.id === id) {
              return {
                ...movie,
                description: movieDetails.data.Movie.description,
                rating: movieDetails.data.Movie.rating
              }
            }

            return movie;
          });

          this.setState({data: movies});
        });
  }

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
              selectMovie={this.selectMovie}/>

          <Panel
              movie={activeMovie}
              updateRating={this.updateRating}
              clearSelected={this.clearSelected}/>
        </div>
    );
  }
}

export default Home;
