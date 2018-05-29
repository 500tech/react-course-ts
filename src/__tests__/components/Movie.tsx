import * as React from 'react';
import { shallow } from 'enzyme';
import { noop } from 'lodash';
import Movie from "../../components/Movie";

const setup = ({ movie = null, selectMovie = noop, removeMovie = noop } = {}) => ({
  movie,
  selectMovie,
  removeMovie
});

describe('<Movie/>', () => {

  const movie = {
    label: 'test movie',
    rating: 1,
    id: 1
  };

  test('should render', () => {
    const props = setup({ movie });
    const component = shallow(
        <Movie {...props} />
    );

    expect(component).toMatchSnapshot();
  });

  test('should select movie', () => {
    const selectMovieSpy = jest.fn();
    const props = setup({ movie, selectMovie: selectMovieSpy });
    const component = shallow(
        <Movie {...props} />
    );

    expect(props.selectMovie).not.toHaveBeenCalled();

    component.simulate('click');

    expect(props.selectMovie).toHaveBeenCalled();
  });

  test('should remove movie', () => {
    const removeMovieSpy = jest.fn();
    const props = setup({ movie, removeMovie: removeMovieSpy });
    const component = shallow(
        <Movie {...props} />
    );

    expect(props.removeMovie).not.toHaveBeenCalled();

    component.find('.remove').simulate('click');

    expect(props.removeMovie).toHaveBeenCalled();
  });


});
