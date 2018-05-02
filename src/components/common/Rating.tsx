import cx from 'classnames';
import * as React from 'react';

const Rating = ({ amount, updateRating }) => (
  <div className="rating">
    {
      [1, 2, 3, 4, 5].map(val => {
        const classes = cx('rating-circle', {
          filled: val <= amount
        });

        return (
          <div
            key={`rating-${val}`}
            className={classes}
            onClick={() => updateRating(val)} />
        );
      })
    }
  </div>
);

export default Rating;
