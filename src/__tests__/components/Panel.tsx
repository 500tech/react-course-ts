import * as React from 'react';
import { shallow } from 'enzyme';
import Panel from "../../components/Panel";
import { noop } from 'lodash';

const setup = ({ movie = null, updateRating = noop, clearSelected = noop } = {}) => ({
  movie,
  updateRating,
  clearSelected
});

describe('<Panel/>', () => {

  const movie = {
    label: 'test movie',
    rating: 1,
    id: 1,
    description: "description"
  };

  test('should render nothing when no movie is provided', () => {
    const props = setup();
    const component = shallow(
        <Panel {...props} />
    );

    expect(component).toMatchSnapshot();
  });

  test('should render a movie when a movie is provided', () => {
    const props = setup({ movie });

    const component = shallow(
        <Panel {...props} />
    );

    expect(component).toMatchSnapshot();
  });

  test('should call clearSelected when closing the panel', () => {
    const props = setup({ movie, clearSelected: jest.fn() });
    const component = shallow(
        <Panel {...props} />
    );

    expect(props.clearSelected).not.toHaveBeenCalled();

    component.find('.panel-close').simulate('click');

    expect(props.clearSelected).toHaveBeenCalled();
  });
});
