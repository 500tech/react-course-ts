import * as React from 'react';
import Movie from './Movie';

const Movies = ({ data, removeMovie }) => (
  <ul>
    {data.map((movie, index) =>
      <Movie
        label={movie}
        key={movie}
        removeMovie={() => removeMovie(index)} />
    )}
  </ul>
);

export default Movies;
