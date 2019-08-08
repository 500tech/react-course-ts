import {
  ADD_TODO,
  REMOVE_TODO,
  SET_TODOS,
  SET_TODO,
} from 'state/actions/todos';

export function todos(state = [], action) {
  switch (action.type) {
    case SET_TODOS: {
      return action.payload;
    }
    case ADD_TODO: {
      const todo = action.payload;
      return [todo, ...state];
    }
    case REMOVE_TODO: {
      const todo = action.meta.originalPayload;
      return state.filter(t => t.id !== todo.id);
    }
    case SET_TODO: {
      const todo = action.payload;
      return state.map(t => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      });
    }
    default: {
      return state;
    }
  }
}
