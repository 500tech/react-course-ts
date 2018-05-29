import * as React from 'react';
import { shallow } from 'enzyme';
import { noop } from 'lodash';
import Movies from "../../components/Movies";
import Movie from "../../components/Movie";

const setup = ({
  data = [],
  addMovie = noop,
  clearAll = noop,
  removeMovie = noop,
  selectMovie = noop,
  updateValue = noop,
  inputVal = ''
} = {}) => ({
  data,
  addMovie,
  clearAll,
  selectMovie,
  removeMovie,
  updateValue,
  inputVal
});

describe('<Movies/>', () => {

  const movies = [
    { label: 'test movie', rating: 1, id: 1 },
    { label: 'test movie 2', rating: 2, id: 2 },
    { label: 'test movie 3', rating: 3, id: 3 }
  ];

  test('should render without movies', () => {
    const props = setup();
    const component = shallow(
        <Movies {...props} />
    );

    expect(component).toMatchSnapshot();
    expect(component.find('.empty')).toExist();
  });

  test('should render with movies', () => {
    const props = setup({ data: movies });
    const component = shallow(
        <Movies {...props} />
    );

    expect(component).toMatchSnapshot();
    expect(component.find(Movie).length).toEqual(3);
  });

  test('should fire clearAll when clicking on clear all', () => {
    const props = setup({ clearAll: jest.fn() });
    const component = shallow(
      <Movies {...props} />
    );

    expect(props.clearAll).not.toHaveBeenCalled();

    component.find('.clear').simulate('click');

    expect(props.clearAll).toHaveBeenCalled();
  });
});
