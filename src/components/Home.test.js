import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Home } from './Home';

test("Render doesn't crash", () => {
  render(<Home />);
});

test('Make sure a user is greeted properly', () => {
  const { queryByText } = render(<Home />);
  const greeter = queryByText(/greeting/i);
  expect(greeter).not.toBeNull();
});

test('Make sure greeting click handler is called', () => {
  const mock = jest.fn();
  const { queryByText } = render(<Home onGreetingClick={mock} />);
  const greeter = queryByText(/greeting/i);
  expect(greeter).not.toBeNull();
  expect(mock).not.toHaveBeenCalled();
  fireEvent.click(greeter, {});
  expect(mock).toHaveBeenCalledTimes(1);
});
