import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Title } from '.';

test('Nothing is broken', () => {
  const wrapper = shallow(<Title color="red">Meow</Title>);

  expect(toJson(wrapper)).toMatchSnapshot();
});

test('Color matches prop', ()  => {
  const wrapper = shallow(<Title color="red">Meow</Title>);

  expect(wrapper.find('h1').props().style.color).toBe('red');
});

test('Default color is correct', ()  => {
  const wrapper = shallow(<Title>Meow</Title>);

  expect(wrapper.find('h1').props().style.color).toBe('blue');
});