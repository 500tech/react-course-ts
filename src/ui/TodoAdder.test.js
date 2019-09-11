import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from 'test-utils';
import { TodoAdder } from './TodoAdder';

test('It renders without crashing', () => {
  render(<TodoAdder />);
});

test('Button is not initially visible', () => {
  const { queryByText } = render(<TodoAdder />);
  const btn = queryByText('Add');
  expect(btn).not.toBeNull();
  expect(btn).not.toBeVisible();
});

test('User can type in stuff', () => {
  const { queryByPlaceholderText } = render(<TodoAdder />);
  const input = queryByPlaceholderText(/todo/);
  expect(input).not.toBeNull();
  expect(input).toBeVisible();
  expect(input).toHaveFocus();
  expect(input).toHaveValue('');
  fireEvent.change(input, {
    target: {
      value: 'meow',
    },
  });
  expect(input).toHaveValue('meow');
});

test('Button shows up when user types text', () => {
  const { queryByPlaceholderText, queryByText } = render(<TodoAdder />);
  const input = queryByPlaceholderText(/todo/);
  const btn = queryByText('Add');
  fireEvent.change(input, {
    target: {
      value: 'meow',
    },
  });
  expect(btn).toBeVisible();
});

test('Calls onAddTodo on submit, when there is text', () => {
  const fn = jest.fn();
  const { queryByPlaceholderText } = render(<TodoAdder onAddTodo={fn} />);
  const input = queryByPlaceholderText(/todo/);
  fireEvent.submit(input, {});
  expect(fn).not.toHaveBeenCalled();
  fireEvent.change(input, {
    target: {
      value: 'meow',
    },
  });
  fireEvent.submit(input, {});
  expect(fn).toHaveBeenCalledWith('meow');
});

// test('Auto submit works', done => {
//   const fn = jest.fn();
//   const { queryByPlaceholderText } = render(
//     <TodoAdder onAddTodo={fn} autoSubmit />
//   );
//   const input = queryByPlaceholderText(/todo/);
//   setTimeout(() => {
//     expect(fn).not.toHaveBeenCalled();
//     fireEvent.change(input, {
//       target: {
//         value: 'meow',
//       },
//     });
//     setTimeout(() => {
//       expect(fn).toHaveBeenCalledWith('meow');
//       done();
//     }, 3500);
//   }, 500);
// });
