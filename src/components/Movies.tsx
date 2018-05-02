import * as React from 'react';
import Movie from './Movie';

const Movies = ({ data }) => (
  <ul>
    {data.map(movie => <Movie label={movie} key={movie} />)}
  </ul>
);

export default Movies;
