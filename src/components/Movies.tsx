import * as React from 'react';
import Movie from './Movie';

interface ComponentProps {
  data: string[],
  removeMovie: (id) => void
}

const Movies = (props: ComponentProps) => (
  <ul>
    {props.data.map((movie, index) =>
      <Movie
        label={movie}
        key={movie}
        removeMovie={() => props.removeMovie(index)} />
    )}
  </ul>
);

export default Movies;
