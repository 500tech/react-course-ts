import * as React from 'react';
import Button from './common/Button';
import Input from './common/Input';

const Movies = ({ data, addMovie, clearAll, removeMovie, selectMovie, updateValue, inputVal }) => (
  <div className="movies">
    <div className="header">my favorite movies</div>

    <Input onChange={updateValue} value={inputVal} />

    <Button onClick={addMovie}>add movie</Button>

    {
      data.length ? (
        <ul>
          {
            data.map(movie => (
              <li key={movie.id} onClick={() => selectMovie(movie.id)}>
                <div>{movie.label}</div>
                <div
                  className="remove"
                  onClick={() => removeMovie(movie.id)}>
                  remove
                </div>
              </li>
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
      <div className="clear" onClick={clearAll}>clear all</div>
    </div>
  </div>
);

export default Movies;
