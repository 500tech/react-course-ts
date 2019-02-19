import { ADD_TODO, TOGGLE_TODO } from '../actions/types';

export default (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { payload: text } = action;
      const maxId = Math.max(...todos.map(t => t.id));
      const todo = { id: maxId + 1, text, done: false };
      return [...todos, todo];
    }
    case TOGGLE_TODO: {
      const { payload: tid } = action;
      return todos.map(todo =>
        todo.id === tid
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      );
    }
    default: {
      return todos;
    }
  }
};
