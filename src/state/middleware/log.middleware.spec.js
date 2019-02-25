import { log } from './log.middleware';

describe('log middleware', () => {
  let i = 0;
  const callstack = [];
  const mockStore = {
    getState() {
      return i++;
    },
  };
  const next = action => callstack.push({ type: 'next', value: action });
  const logger = value => callstack.push({ type: 'log', value });
  it('calls the dependencies in order', () => {
    const logInstance = log(logger)(mockStore)(next);
    const ref = {};
    logInstance(ref);
    expect(callstack).toEqual([
      { type: 'log', value: 0 },
      { type: 'log', value: ref },
      { type: 'next', value: ref },
      { type: 'log', value: 1 },
    ]);
  });
});
