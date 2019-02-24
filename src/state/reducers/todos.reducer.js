import uuid from 'uuid';
import produce from 'immer';
import {
  TOGGLE_TODO,
  ADD_TODO,
  REMOVE_TODO,
  SET_TODOS,
} from '../actions/types';

export function todos(todos = null, action) {
  switch (action.type) {
    case TOGGLE_TODO: {
      const idx = action.payload;
      return produce(todos, draft => {
        draft[idx].completed = !draft[idx].completed;
      });
    }
    case ADD_TODO: {
      const title = action.payload;
      return produce(todos, draft => {
        const todo = { title, completed: false, $id: uuid() };
        draft.push(todo);
      });
    }
    case REMOVE_TODO: {
      const idx = action.payload;
      return produce(todos, draft => {
        draft.splice(idx, 1);
      });
    }
    case SET_TODOS: {
      return action.payload;
    }
    default: {
      return todos;
    }
  }
}
