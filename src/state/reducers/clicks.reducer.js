export const clicks = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
    case 'DECREMENT': {
      return state + 1;
    }
    default: {
      return state;
    }
  }
};
