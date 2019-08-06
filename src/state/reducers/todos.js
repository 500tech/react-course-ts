import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from 'state/actions';

let _id = 0;
const getId = () => _id++;

export function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO: {
      const text = action.payload;
      const todo = {
        id: getId(),
        title: text,
        completed: false,
      };
      return [todo, ...state];
    }
    case TOGGLE_TODO: {
      const todo = action.payload;
      return state.map(t =>
        t.id === todo.id
          ? {
              ...todo,
              completed: !todo.completed,
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
