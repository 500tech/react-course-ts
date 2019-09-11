import { theme } from './theme';

test('Initial state makes sense', () => {
  const state = theme(undefined, {});
  expect(state).toBe('lightTheme');
});

test('theme reducer after a user session', () => {
  const actions = [
    { type: 'foo' },
    { type: 'foo' },
    { type: 'SET_THEME', payload: 'dark' },
    { type: 'meow' },
    { type: 'SET_THEME', payload: 'darkTheme' },
    { type: 'SET_THEME', payload: 'dark' },
  ];
  const state = actions.reduce(theme, 'lightTheme');
  expect(state).toBe('darkTheme');
})