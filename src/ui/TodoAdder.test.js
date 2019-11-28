import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TodoAdder } from './TodoAdder';

describe('TodoAdder', () => {
  it('render', () => {
    render(<TodoAdder />);
  });

  it('is the same as before', () => {
    expect(render(<TodoAdder />).asFragment()).toMatchSnapshot();
  });

  it('has auto focus', () => {
    const { queryByPlaceholderText } = render(<TodoAdder />);
    const input = queryByPlaceholderText(/enter todo/i);
    expect(input).not.toBeNull();
    expect(input).toHaveFocus();
  });

  it('changes input text on type', () => {
    const { queryByPlaceholderText } = render(<TodoAdder />);
    const input = queryByPlaceholderText(/enter todo/i);
    fireEvent.change(input, {
      target: {
        value: 'hello',
      },
    });
    expect(input).toHaveValue('hello');
    fireEvent.change(input, {
      target: {
        value: 'hello clear',
      },
    });
    expect(input).toHaveValue('');
  });

  it('only enables and shows the button when applicable', () => {
    const { queryByPlaceholderText, getByText } = render(<TodoAdder />);
    const input = queryByPlaceholderText(/enter todo/i);
    const btn = getByText(/add/i);
    expect(btn).not.toBeVisible();
    fireEvent.change(input, {
      target: {
        value: 'hello',
      },
    });
    expect(btn).toBeVisible();
    fireEvent.change(input, {
      target: {
        value: 'password',
      },
    });
    expect(btn).not.toBeVisible();
  });

  it('calls on add when it should', () => {
    const onAdd = jest.fn();
    const { queryByPlaceholderText } = render(<TodoAdder onAdd={onAdd} />);
    const input = queryByPlaceholderText(/enter todo/i);
    fireEvent.submit(input);
    expect(onAdd).not.toHaveBeenCalled();
    fireEvent.change(input, {
      target: {
        value: 'hello',
      },
    });
    fireEvent.submit(input);
    expect(onAdd).toHaveBeenCalledWith('hello');
    expect(input).toHaveValue('');
  });
});
