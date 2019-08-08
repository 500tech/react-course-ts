import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from 'test-utils';
import { Todo } from './Todo';

const TODO = {
  id: 0,
  title: 'Complete the test',
  completed: false,
};

test('It renders', () => {
  render(<Todo todo={TODO} />);
});

test('Shows correct text', () => {
  const { queryByText } = render(<Todo todo={TODO} />);
  const title = queryByText(TODO.title);
  expect(title).not.toBeNull();
  expect(title).toBeVisible();
});

test('Clicking the title triggers toggle', () => {
  const toggle = jest.fn();
  const { queryByText } = render(<Todo todo={TODO} onToggleTodo={toggle} />);
  const title = queryByText(TODO.title);
  expect(toggle).not.toHaveBeenCalled();
  fireEvent.click(title, {});
  expect(toggle).toHaveBeenCalledTimes(1);
  expect(toggle).toHaveBeenCalledWith(TODO);
});

test('Clicking the title triggers delete', () => {
  const deleteTodo = jest.fn();
  const { queryByText } = render(
    <Todo todo={TODO} onDeleteTodo={deleteTodo} />
  );
  const title = queryByText(TODO.title);
  expect(deleteTodo).not.toHaveBeenCalled();
  fireEvent.click(title, { ctrlKey: true });
  expect(deleteTodo).toHaveBeenCalledTimes(1);
  expect(deleteTodo).toHaveBeenCalledWith(TODO);
  fireEvent.click(title, { metaKey: true });
  expect(deleteTodo).toHaveBeenCalledTimes(2);
});
