import { getUniqueId } from 'utils';

export function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const text = action.payload;
      const todo = { id: getUniqueId(), title: text, completed: false };
      return [todo, ...state];
    }
    case 'REMOVE_TODO': {
      const todoId = action.payload;
      return state.filter(todo => todo.id !== todoId);
    }
    case 'UPDATE_TODO': {
      const { todoId, update } = action.payload;
      return state.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            ...update,
          };
        }
        return todo;
      });
    }
    default: {
      return state;
    }
  }
}
