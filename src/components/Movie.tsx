import * as React from 'react';

interface ComponentProps {
  label: string,
  removeMovie: (id) => void
}

const Movie = (props: ComponentProps) => <li onClick={props.removeMovie}>{props.label}</li>;

export default Movie;
