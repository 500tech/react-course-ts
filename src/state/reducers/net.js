import { API_END, API_START } from 'state/actions';

export function net(state = {}, action) {
  switch (action.type) {
    case API_START: {
      const group = action.payload || '*';
      return {
        ...state,
        [group]: (state[group] || 0) + 1,
      };
    }
    case API_END: {
      const group = action.payload || '*';
      return {
        ...state,
        [group]: (state[group] || 0) - 1,
      };
    }
    default:
      return state;
  }
}
