import { START_API, END_API } from 'state/actions/net';

export function net(state = {}, action) {
  switch (action.type) {
    case START_API: {
      const group = action.payload;
      return {
        ...state,
        [group]: (state[group] || 0) + 1,
      };
    }
    case END_API: {
      const group = action.payload;
      return {
        ...state,
        [group]: state[group] - 1,
      };
    }
    default:
      return state;
  }
}
