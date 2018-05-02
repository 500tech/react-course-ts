import {find, findIndex} from 'lodash';
import * as React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Movies from './components/Movies';
import Panel from './components/Panel';

interface ComponentState {
  data: Array<{
    label: string,
    rating: number,
    id: number
  }>,
  inputVal: string,
  selectedId: null | number
}

class App extends React.Component<{}, ComponentState> {
  state = {
    data: [
      { id: 0, label: 'forest gump', rating: 1 },
      { id: 1, label: 'wonder woman', rating: 2 },
      { id: 2, label: 'a quiet place', rating: 1 }
    ],
    inputVal: '',
    selectedId: null
  };

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

    console.log(this.props);

    return (
      <Router>
        <div className="app">
          <Movies
            data={data}
            inputVal={inputVal}
            addMovie={this.addMovie}
            clearAll={this.clearAll}
            removeMovie={this.removeMovie}
            updateValue={this.updateValue}
            selectMovie={id => this.setState({ selectedId: id })} />

          <Route
            exact={true}
            // path={match.url}
            render={() => <h3>Please select a topic.</h3>}
          />

          <Panel
            movie={activeMovie}
            updateRating={this.updateRating}
            clearSelected={this.clearSelected} />
        </div>
      </Router>
    );
  }
}

export default App;
