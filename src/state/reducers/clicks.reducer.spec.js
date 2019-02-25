import { clicks } from './clicks.reducer';
import { increment, decrement } from '../actions/math.actions';
import { getTodos } from '../actions/todos.actions';

describe('clicks reducer', () => {
  it('has the correct initial state', () => {
    const state = clicks(undefined, {});
    expect(state).toBe(0);
  });
  it('does not change state on unrelated action', () => {
    const state = clicks(4, getTodos());
    expect(state).toBe(4);
  });
  it('does change state on related actions', () => {
    let state = clicks(4, increment());
    expect(state).toBe(5);
    state = clicks(5, decrement());
    expect(state).toBe(6);
  });
});
