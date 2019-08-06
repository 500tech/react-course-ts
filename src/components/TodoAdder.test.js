import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from 'test-utils';
import { TodoAdder } from './TodoAdder';

test('Render does not crash', () => {
  render(<TodoAdder />);
});

test('Make sure that input is focused', () => {
  const { queryByPlaceholderText } = render(<TodoAdder />);
  const input = queryByPlaceholderText(/write/i);
  expect(input).toHaveFocus();
});

test('Make sure changes to the input are recorded', () => {
  const { queryByPlaceholderText } = render(<TodoAdder />);
  const input = queryByPlaceholderText(/write/i);
  expect(input).toHaveValue('');
  fireEvent.change(input, {
    target: {
      value: 'foo',
    },
  });
  expect(input).toHaveValue('foo');
});

test('pressing the button only activates the cb when enabled', () => {
  const addTodo = jest.fn();
  const { queryByPlaceholderText, queryByText } = render(
    <TodoAdder onAddTodo={addTodo} />
  );
  const input = queryByPlaceholderText(/write/i);
  const btn = queryByText(/add/i);
  fireEvent.click(btn);
  expect(addTodo).not.toHaveBeenCalled();
  fireEvent.change(input, {
    target: {
      value: 'foo',
    },
  });
  fireEvent.click(btn);
  expect(addTodo).toHaveBeenCalledWith('foo');
  expect(input).toHaveValue('');
});
