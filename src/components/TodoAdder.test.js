import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from 'test-utils';
import { TodoAdder } from './TodoAdder';

test('It renders', () => {
  render(<TodoAdder />);
});

test('Input has autofocus', () => {
  const { queryByPlaceholderText } = render(<TodoAdder />);
  const input = queryByPlaceholderText(/write/i);
  expect(input).not.toBeNull();
  expect(input).toHaveFocus();
});

test("User can change the input's value", () => {
  const { queryByPlaceholderText } = render(<TodoAdder />);
  const input = queryByPlaceholderText(/write/i);
  expect(input).toHaveValue('');
  fireEvent.change(input, { target: { value: 'foo' } });
  expect(input).toHaveValue('foo');
});

test('Submitting calls the provided callback', () => {
  const add = jest.fn();
  const { queryByPlaceholderText } = render(<TodoAdder onAddTodo={add} />);
  const input = queryByPlaceholderText(/write/i);
  // no input
  fireEvent.submit(input, { preventDefault: () => null });
  expect(add).not.toHaveBeenCalled();
  // after input
  fireEvent.change(input, { target: { value: 'foo' } });
  fireEvent.submit(input, { preventDefault: () => null });
  // after submit
  expect(add).toHaveBeenCalledWith({ title: 'foo', completed: false });
  expect(input).toHaveValue('');
});

test('Using the button works just like submit', () => {
  const add = jest.fn();
  const { queryByPlaceholderText, queryByText } = render(
    <TodoAdder onAddTodo={add} />
  );
  const input = queryByPlaceholderText(/write/i);
  const btn = queryByText(/add/i);
  fireEvent.click(btn, {});
  expect(add).not.toHaveBeenCalled();
  fireEvent.change(input, { target: { value: 'foo' } });
  fireEvent.click(btn, {});
  expect(add).toHaveBeenCalledWith({ title: 'foo', completed: false });
  expect(input).toHaveValue('');
  expect(btn).toBeDisabled();
});

test('Auto submit works', done => {
  const add = jest.fn();
  const { queryByPlaceholderText } = render(<TodoAdder onAddTodo={add} />);
  const input = queryByPlaceholderText(/write/i);
  fireEvent.change(input, { target: { value: 'foo' } });
  setTimeout(() => {
    expect(add).toHaveBeenCalledWith({ title: 'foo', completed: false });
    done();
  }, 3500);
});
