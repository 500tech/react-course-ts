import * as themes from 'themes';

const [INITIAL_THEME] = Object.keys(themes);

export function theme(state = INITIAL_THEME, action) {
  switch (action.type) {
    case 'SET_THEME': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
