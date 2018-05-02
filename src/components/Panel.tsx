import * as React from 'react';
import Rating from './common/Rating';

const Panel = ({ movie, updateRating, clearSelected }) => {
  if (!movie) {
    return null;
  }

  return (
    <div className="panel">
      <div className="panel-title">{movie.label}</div>
      <div className="panel-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <Rating amount={movie.rating} updateRating={val => updateRating(movie.id, val)} />

      <div
        className="panel-close"
        onClick={clearSelected}>
        close panel
      </div>
    </div>
  );
};

export default Panel;
