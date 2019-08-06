import { SET_THEME } from 'state/actions';
import { theme } from './theme';

test('Initial state makes sens', () => {
  let state = undefined;
  state = theme(state, { type: '????' });
  expect(state).toBe('lightTheme');
});

test('Setting state works as intended', () => {
  const initialState = 'lightTheme';
  const actions = [
    { type: '????' },
    { type: '????' },
    { type: SET_THEME, payload: 'darkTheme' },
    { type: '????' },
  ];
  const state = actions.reduce(theme, initialState);
  expect(state).toBe('darkTheme');
});
