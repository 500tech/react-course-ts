import * as todosActions from './todos.actions';

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case todosActions.CREATE_TODO: {
      return [...state, action.payload];
    }
    case todosActions.TOGGLE_TODO: {
      const { payload: index } = action;
      return state.map((todo, idx) =>
        index === idx ? { ...todo, done: !todo.done } : todo
      );
    }
    default: {
      return state;
    }
  }
}
