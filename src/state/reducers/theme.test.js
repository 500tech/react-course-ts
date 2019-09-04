import { theme } from './theme';
import { setTheme } from '../actions';

test('everything makes sense', () => {
  const state = theme(undefined, { type: 'meow' });
  expect(state).toBe('lightTheme');
});

test('everything makes sense 2', () => {
  const actions = [
    { type: 'meow' },
    setTheme('darkTheme'),
    { type: 'meow' },
    setTheme('foo'),
  ];

  const state = actions.reduce(theme, 'lightTheme');
  expect(state).toBe('darkTheme');
});
