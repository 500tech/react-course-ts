import { ADD_TODO, SET_TODO, REMOVE_TODO, SET_TODOS } from 'state/actions';

export function todos(state = [], action) {
  switch (action.type) {
    case SET_TODOS: {
      return action.payload;
    }
    case ADD_TODO: {
      return [action.payload, ...state];
    }
    case SET_TODO: {
      const todo = action.payload;
      return state.map(t => (t.id === todo.id ? todo : t));
    }
    case REMOVE_TODO: {
      const todo = action.meta.originalPayload;
      return state.filter(({ id }) => id !== todo.id);
    }
    default: {
      return state;
    }
  }
}
