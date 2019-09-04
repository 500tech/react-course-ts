import { getId } from 'utils';

export function todos(todos = [], action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const title = action.payload;
      return [{ id: getId(), title, completed: false }, ...todos];
    }
    case 'REMOVE_TODO': {
      const todoId = action.payload;
      return todos.filter(todo => {
        return todo.id !== todoId;
      });
    }
    case 'UPDATE_TODO': {
      const { todoId, patch } = action.payload;
      return todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            ...patch,
          };
        }
        return todo;
      });
    }
    default:
      return todos;
  }
}
