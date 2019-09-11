import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Home';

test('It renders without crashing', () => {
  render(<Home />);
});

test('It has the correct greeting, sorta', () => {
  const { queryByText } = render(<Home />);
  const title = queryByText(/home page/i);
  expect(title).not.toBeNull();
  const todos = queryByText(/todos/i);
  expect(todos).toBeNull();
});
