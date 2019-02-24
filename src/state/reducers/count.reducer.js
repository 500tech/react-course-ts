import * as actions from '../actions/types';

export const count = (state = 0, action) => {
  switch (action.type) {
    case actions.INCREMENT: {
      const { payload = 1 } = action;
      return state + payload;
    }
    case actions.DECREMENT: {
      return state - 1;
    }
    default: {
      return state;
    }
  }
};
