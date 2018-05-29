import * as cx from 'classnames';
import * as React from 'react';

interface ComponentProps {
  amount: number,
  updateRating: (val) => void
}

const Rating = (props: ComponentProps) => (
  <div className="rating">
    {
      [1, 2, 3, 4, 5].map(val => {
        const classes = cx('rating-circle', {
          filled: val <= props.amount
        });

        return (
          <div
            key={`rating-${val}`}
            className={classes}
            onClick={() => props.updateRating(val)} />
        );
      })
    }
  </div>
);

export default Rating;
