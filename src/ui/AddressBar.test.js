import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from 'test-utils';
import { AddressBar } from './AddressBar';

test('It does not crash', () => {
  render(<AddressBar />);
});

test('It changes url value when typing', () => {
  const { getByDisplayValue, getByText } = render(<AddressBar />);
  const el = getByDisplayValue('/');
  fireEvent.change(el, { target: { value: '/todos' } });
  expect(el).toHaveValue('/todos');
  fireEvent.submit(el, {});
  const backButton = getByText(/back/i);
  fireEvent.click(backButton, {});
  expect(el).toHaveValue('/');
});
