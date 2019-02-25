import { createAction } from './utils';

describe('createAction', () => {
  it('Returns a function', () => {
    const increment = createAction('INCREMENT');
    expect(typeof increment).toBe('function');
  });
});
