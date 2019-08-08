import { START_API, END_API } from 'state/actions';
import { net as reducer } from './net';

const start = group => ({
  type: START_API,
  payload: group,
});

const end = group => ({
  type: END_API,
  payload: group,
});

const NOOP = { type: '???' };

test('Async flow results in sane loading state', () => {
  const initial = {};
  const actions = [
    NOOP,
    start('todos'),
    end('todos'),
    start('todos'),
    start('users'),
    start('todos'),
    start('request'),
    end('users'),
    end('users'),
  ];
  const netState = actions.reduce(reducer, initial);
  expect(netState).toEqual({
    todos: 2,
    users: 0,
    request: 1,
  });
});
