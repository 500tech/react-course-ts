import { todos } from './todos.reducer';
import * as actors from '../actions/todos.actions';

describe('todos reducer', () => {
  it('has correct initial state', () => {
    const state = todos(undefined, {});
    expect(state).toBe(null);
  });

  it('does not react to getTodos', () => {
    const state = todos(null, actors.getTodos());
    expect(state).toBe(null);
  });

  describe('toggle action', () => {
    it('toggles the todo', () => {
      const state = todos([{}, { completed: true }], actors.toggleTodo(1));
      expect(state[1].completed).toBe(false);
    });
  });
});
