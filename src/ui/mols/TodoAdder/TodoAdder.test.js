import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TodoAdder } from '.';

test('Nothing is broken', () => {
  const wrapper = mount(<TodoAdder />);

  expect(toJson(wrapper)).toMatchSnapshot();
});

test('Initializing text initializes text', () => {
  const wrapper = mount(<TodoAdder initialText="initial text" />);
  expect(wrapper.find('input').props().value).toBe('initial text');
  expect(wrapper.instance().state.text).toBe('initial text');
});

test('Autofocus', () => {
  const wrapper = mount(<TodoAdder initialText="initial text" />);
  expect(wrapper.instance().inputRef.current).not.toBeNull();
  expect(wrapper.instance().inputRef.current).toBe(
    window.document.activeElement
  );
});

test('Submit', () => {
  const onAdd = jest.fn();
  const wrapper = mount(<TodoAdder initialText="initial text" onAdd={onAdd} />);
  wrapper.find('form').simulate('submit');
  expect(wrapper.instance().state.text).toBe('');
  expect(onAdd).toHaveBeenCalledWith('initial text');
});
