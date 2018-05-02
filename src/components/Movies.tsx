import * as React from 'react';
import Button from './common/Button';
import Input from './common/Input';
import Movie from './Movie';

interface ComponentProps {
  data: Array<{
    label: string,
    rating: number,
    id: number
  }>,
  addMovie: () => void,
  clearAll: () => void,
  removeMovie: (id) => void,
  selectMovie: (id) => void,
  updateValue: (val) => void,
  inputVal: string
}

const Movies = (props: ComponentProps) => (
  <div className="movies">
    <div className="header">my favorite movies</div>

    <Input onChange={props.updateValue} value={props.inputVal} />

    <Button onClick={props.addMovie}>add movie</Button>

    {
      props.data.length ? (
        <ul>
          {
            props.data.map(movie => (
              <Movie
                key={movie.id}
                movie={movie}
                selectMovie={props.selectMovie}
                removeMovie={props.removeMovie}
              />
            ))
          }
        </ul>
      ) : (
        <div className="empty">
          no movies
        </div>
      )
    }

    <div className="filters">
      <div className="clear" onClick={props.clearAll}>clear all</div>
    </div>
  </div>
);

export default Movies;
