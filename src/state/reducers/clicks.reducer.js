import * as actions from '../actions/types';

export const clicks = (state = 0, action) => {
  switch (action.type) {
    case actions.INCREMENT:
    case actions.DECREMENT: {
      return state + 1;
    }
    default: {
      return state;
    }
  }
};
