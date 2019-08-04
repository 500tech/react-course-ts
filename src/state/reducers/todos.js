import { getId } from 'utils';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from 'state/actions/todos';

export function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO: {
      const title = action.payload;
      const todo = { id: getId(), title, completed: false };
      return [todo, ...state];
    }
    case REMOVE_TODO: {
      const todo = action.payload;
      return state.filter(t => t.id !== todo.id);
    }
    case TOGGLE_TODO: {
      const todo = action.payload;
      return state.map(t => {
        if (t.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return t;
      });
    }
    default: {
      return state;
    }
  }
}
