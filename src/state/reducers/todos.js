export function todos(state = [], action) {
  switch (action.type) {
    case 'SET_TODOS': {
      return action.payload;
    }
    case 'ADD_TODO': {
      const todo = action.payload;
      return [todo, ...state];
    }
    case 'REMOVE_TODO': {
      const todoId = action.meta.originalPayload;
      return state.filter(todo => todo.id !== todoId);
    }
    case 'SET_TODO': {
      const todo = action.payload;
      return state.map(t => {
        if (todo.id === t.id) {
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
