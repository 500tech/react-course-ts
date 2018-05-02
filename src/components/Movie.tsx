import * as React from 'react';

interface ComponentProps {
  movie: {
    label: string,
    rating: number,
    id: number
  },
  selectMovie: (id) => void,
  removeMovie: (id) => void
}

const Movie = (props: ComponentProps) => (
  <li onClick={() => props.selectMovie(props.movie.id)}>
    <div>{props.movie.label}</div>
    <div
      className="remove"
      onClick={() => props.removeMovie(props.movie.id)}>
      remove
    </div>
  </li>
);

export default Movie;
