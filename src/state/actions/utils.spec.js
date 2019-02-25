import { createAction } from './utils';

describe('createAction', () => {
  it('Returns a function', () => {
    const increment = createAction('INCREMENT');
    expect(typeof increment).toBe('function');
  });

  it('Returns valid action object', () => {
    const increment = createAction('INCREMENT');
    const action = increment(1);
    expect(action.type).toBe('INCREMENT');
    expect(action.payload).toBe(1);
  });
});
