import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from './AddTodo';
import toJson from 'enzyme-to-json';

const isFocusedElement = wrapper =>
  wrapper.getDOMNode() === document.activeElement;

describe('<AddTodo />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });
  it('autofocuses if needed', () => {
    const wrapper = mount(<AddTodo />);
    expect(isFocusedElement(wrapper.find('input'))).toBe(false);
    wrapper.unmount();
    wrapper.setProps({ autoFocus: true });
    wrapper.mount();
    expect(isFocusedElement(wrapper.find('input'))).toBe(true);
    wrapper.unmount();
  });
  it('has a text value reflecting of its state', () => {
    const wrapper = shallow(<AddTodo />);
    wrapper
      .find('input')
      .simulate('change', { target: { value: 'Do a thing' } });
    expect(wrapper.find('input').props().value).toBe('Do a thing');
  });
  it('is sane', () => {
    const wrapper = shallow(<AddTodo />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
