import { SET_THEME } from 'state/actions';
import { theme as reducer } from './theme';

test('Initial state makes sense', () => {
  let state = undefined;
  state = reducer(state, { type: '????' });
  expect(state).toBe('redhat');
});

test('Setting the theme works', () => {
  const initial = 'redhat';
  const actions = [
    {
      type: '???',
    },
    {
      type: SET_THEME,
      payload: 'twitter',
    },
    {
      type: '???',
    },
    {
      type: SET_THEME,
      payload: 'facebook',
    },
    {
      type: '???',
    },
  ];
  const theme = actions.reduce(reducer, initial);
  expect(theme).toBe('facebook');
});
