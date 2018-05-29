import * as React from 'react';
import Timers from '../../components/timers';
import { shallow } from "enzyme";

jest.useFakeTimers();

describe('<Timers />', () => {
  test('it should render with a default of 0', () => {
    const component = shallow(
        <Timers />
    );

    expect(component.find('.count')).toHaveText("0");
  });

  test('it should increment count by 1', () => {
    const component = shallow(
        <Timers />
    );

    component.find('.start').simulate('click');

    jest.advanceTimersByTime(1001);
    component.update();

    expect(component.find('.count')).toHaveText("1");
  });

  test('it should stop incrementing when clicking on stop', () => {
    const component = shallow(
        <Timers />
    );

    component.find('.start').simulate('click');

    jest.advanceTimersByTime(1001);
    component.update();

    expect(component.find('.count')).toHaveText("1");

    jest.advanceTimersByTime(1001);
    component.update();

    expect(component.find('.count')).toHaveText("2");

    component.find('.stop').simulate('click');
    jest.advanceTimersByTime(1001);
    component.update();

    expect(component.find('.count')).toHaveText("2");
  });
});
