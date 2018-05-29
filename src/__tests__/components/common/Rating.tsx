import * as React from 'react';
import { shallow } from 'enzyme';

import { noop } from 'lodash';
import Rating from "../../../components/common/Rating";

describe('<Rating />', () => {

  [1, 2, 3, 4, 5].map((amount) => {
    test(`should render empty ${amount}`, () => {
      const component = shallow(
          <Rating amount={ 0 } updateRating={ noop } />
      );

      expect(component.find('.rating-circle')).not.toHaveClassName('filled');
    });
  });

  [1, 2, 3, 4, 5].map((amount) => {
    test(`should render full ${amount}`, () => {
      const component = shallow(
          <Rating amount={ amount } updateRating={ noop } />
      );

      const filledCircles = component.find('.filled');
      expect(filledCircles.length).toEqual(amount);
    });
  });

});


