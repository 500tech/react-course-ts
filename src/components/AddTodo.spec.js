import React from 'react';
import { render, getByTestId, fireEvent } from 'react-testing-library';
import { shallow } from 'enzyme';
import { AddTodo } from './AddTodo';

describe('<AddTodo />', () => {
  it('renders', () => {
    render(<AddTodo />);
  });
  it('Autofocus', () => {
    const { container } = render(<AddTodo />);
    expect(document.activeElement).toBe(getByTestId(container, 'input'));
  });
  it('Changes text on change event', () => {
    let addedTodo = null;
    const { container } = render(
      <AddTodo
        onAddTodo={text => {
          addedTodo = text;
        }}
      />
    );
    const input = getByTestId(container, 'input');
    fireEvent.change(input, { target: { value: 'foo' } });
    const adder = getByTestId(container, 'adder');
    fireEvent.click(adder);
    expect(addedTodo).toBe('foo');
  });
});
