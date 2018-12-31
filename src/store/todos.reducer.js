import * as todosActions from './todos.actions';

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case todosActions.CREATE_TODO: {
      return [...state, { text: action.payload, done: false }];
    }
    case todosActions.TOGGLE_TODO: {
      const { payload: index } = action;
      return [
        ...state.slice(0, index),
        { ...state[index], done: !state[index].done },
        ...state.slice(index + 1),
      ];
    }
  }
}
