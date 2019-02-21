export const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      const { payload = 1 } = action;
      return state + payload;
    }
    case 'DECREMENT': {
      return state - 1;
    }
    default: {
      return state;
    }
  }
};
