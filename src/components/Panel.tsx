import * as React from 'react';
import Rating from './common/Rating';

interface ComponentProps {
  movie: {
    label: string,
    rating: number,
    id: number
  },
  updateRating: (id, val) => void,
  clearSelected: () => void
}

const Panel = (props: ComponentProps) => {
  if (!props.movie) {
    return null;
  }

  return (
    <div className="panel">
      <div className="panel-title">{props.movie.label}</div>
      <div className="panel-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <Rating
        amount={props.movie.rating}
        updateRating={val => props.updateRating(props.movie.id, val)} />

      <div
        className="panel-close"
        onClick={props.clearSelected}>
        close panel
      </div>
    </div>
  );
};

export default Panel;
