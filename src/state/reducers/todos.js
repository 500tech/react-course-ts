export function todos(todos = [], action) {
  switch (action.type) {
    case 'SET_TODOS':
      return action.payload;
    case 'CREATE_TODO': {
      return [action.payload, ...todos];
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
