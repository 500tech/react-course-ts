import { SET_TODO, REMOVE_TODO } from 'state/actions';
import { todos as reducer } from './todos';

test('Setting a todo (replace)', () => {
  const initial = [
    { id: 0, title: 'foo', completed: false },
    { id: 1, title: 'foo', completed: false },
    { id: 2, title: 'foo', completed: false },
  ];
  const actions = [
    { type: SET_TODO, payload: { id: 1, title: 'meow', completed: true } },
  ];
  expect(actions.reduce(reducer, initial)).toEqual([
    { id: 0, title: 'foo', completed: false },
    { id: 1, title: 'meow', completed: true },
    { id: 2, title: 'foo', completed: false },
  ]);
});

test('Remove a todo', () => {
  const initial = [
    { id: 0, title: 'foo', completed: false },
    { id: 1, title: 'foo', completed: false },
    { id: 2, title: 'foo', completed: false },
  ];
  const actions = [
    { type: REMOVE_TODO, meta: { originalPayload: initial[1] } },
  ];
  expect(actions.reduce(reducer, initial)).toEqual([
    { id: 0, title: 'foo', completed: false },
    { id: 2, title: 'foo', completed: false },
  ]);
});
