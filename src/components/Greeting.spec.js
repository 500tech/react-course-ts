import React from 'react';
import { shallow } from 'enzyme';
import Greeting from './Greeting';
import toJson from 'enzyme-to-json';

describe('<Greeting />', () => {
  it('has a default greeting', () => {
    const wrapper = shallow(<Greeting />);
    expect(wrapper.get(0).props.children.join('')).toBe('Hello, stranger!');
  });
  it('greets user by name', () => {
    const wrapper = shallow(<Greeting name="Foo" />);
    expect(wrapper.get(0).props.children.join('')).toBe('Hello, Foo!');
  });
  it('is sane', () => {
    const wrapper = shallow(<Greeting />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
