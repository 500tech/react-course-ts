import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from 'test-utils';
import { Todo } from './Todo';


const TODO = { id: 4, title: 'meow', completed: false };

test('Rendering does not crash', () => {
  render(<Todo todo={TODO} />);
});

test('Todo item has a text', () => {
  const { queryByText } = render(<Todo todo={TODO} />);
  expect(queryByText('meow')).not.toBeNull();
});

test('Clicking should call right callbacks', () => {
  const toggle = jest.fn();
  const remove = jest.fn();
  const { queryByText } = render(
    <Todo todo={TODO} onRemoveTodo={remove} onToggleTodo={toggle} />
  );
  const text = queryByText('meow');
  fireEvent.click(text, {});
  expect(toggle).toHaveBeenCalledTimes(1);
  expect(remove).not.toHaveBeenCalled();

  fireEvent.click(text, { metaKey: true });
  expect(toggle).toHaveBeenCalledTimes(1);
  expect(remove).toHaveBeenCalledTimes(1);
});
