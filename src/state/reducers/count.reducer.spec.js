import { count } from './count.reducer';
import { increment, decrement } from '../actions/math.actions';
import { getTodos } from '../actions/todos.actions';

describe('count reducer', () => {
  it('has the correct initial state', () => {
    const state = count(undefined, {});
    expect(state).toBe(0);
  });
  it('does not change state on unrelated action', () => {
    const state = count(4, getTodos());
    expect(state).toBe(4);
  });
  it('does change state on related actions', () => {
    let state = count(4, increment());
    expect(state).toBe(5);
    state = count(5, decrement());
    expect(state).toBe(4);
    state = count(4, increment(9));
    expect(state).toBe(13);
  });
});
