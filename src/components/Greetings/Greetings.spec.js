import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Greeting, RightDiv } from './Greeting';

describe('<Greeting />', () => {
  it('is sane', () => {
    const wrapper = shallow(<Greeting />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('has a default greeting', () => {
    const wrapper = shallow(<Greeting />);
    expect(
      wrapper
        .find('span')
        .get(0)
        .props.children.join('')
    ).toBe('Hello, stranger!');
  });
  it('greets user by name', () => {
    const wrapper = shallow(<Greeting name="Foo" />);
    expect(
      wrapper
        .find('span')
        .get(0)
        .props.children.join('')
    ).toBe('Hello, Foo!');
  });
  it('has a default greeting', () => {
    const wrapper = shallow(<Greeting />);
    expect(
      wrapper
        .find(RightDiv)
        .get(0)
        .props.children
    ).toBe(0);
  });
});
