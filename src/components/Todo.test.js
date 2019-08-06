import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Todo } from './Todo';

function Wrapper({ children }) {
  return <Router>{children}</Router>;
}

function renderWithRouter(element) {
  return render(element, {
    wrapper: Wrapper,
  });
}

const TODO = { id: 4, title: 'meow', completed: false };

test('Rendering does not crash', () => {
  renderWithRouter(<Todo todo={TODO} />);
});

test('Todo item has a text', () => {
  const { queryByText } = renderWithRouter(<Todo todo={TODO} />);
  expect(queryByText('meow')).not.toBeNull();
});

test('Clicking should call right callbacks', () => {
  const toggle = jest.fn();
  const remove = jest.fn();
  const { queryByText } = renderWithRouter(
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
