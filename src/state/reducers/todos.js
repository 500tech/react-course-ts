import uuid from 'uuid';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from 'state/actions';

export function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO: {
      const text = action.payload;
      const todo = {
        id: uuid(),
        text,
        done: false,
      };
      return [todo, ...state];
    }
    case TOGGLE_TODO: {
      const todo = action.payload;
      return state.map(t =>
        t.id === todo.id
          ? {
              ...todo,
              done: !todo.done,
            }
          : t
      );
    }
    case REMOVE_TODO: {
      const todo = action.payload;
      return state.filter(({ id }) => id !== todo.id);
    }
    default: {
      return state;
    }
  }
}
