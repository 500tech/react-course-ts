import React from 'react';
import { render } from 'test-utils';
import { HomePage } from './HomePage';

test('It does not crash', () => {
  render(<HomePage />);
});

test('It has the correct text, and is visible', () => {
  const { queryByText } = render(<HomePage />);
  const el = queryByText(/home/i);
  expect(el).not.toBeNull();
  expect(el).toBeVisible();
});
