import uuid from 'uuid';
import produce from 'immer';
import { TOGGLE_TODO, ADD_TODO, REMOVE_TODO } from '../actions/types';

const INITIAL_TODOS = [
  { $id: uuid(), text: 'This is todo #1', done: true },
  { $id: uuid(), text: 'This is todo #2', done: false },
  { $id: uuid(), text: 'This is todo #3', done: false },
  { $id: uuid(), text: 'This is todo #4', done: false },
  { $id: uuid(), text: 'This is todo #5', done: false },
];

export function todos(todos = INITIAL_TODOS, action) {
  switch (action.type) {
    case TOGGLE_TODO: {
      const idx = action.payload;
      return produce(todos, draft => {
        draft[idx].done = !draft[idx].done;
      });
    }
    case ADD_TODO: {
      const text = action.payload;
      return produce(todos, draft => {
        const todo = { text, done: false, $id: uuid() };
        draft.push(todo);
      });
    }
    case REMOVE_TODO: {
      const idx = action.payload;
      return produce(todos, draft => {
        draft.splice(idx, 1);
      });
    }
    default: {
      return todos;
    }
  }
}
