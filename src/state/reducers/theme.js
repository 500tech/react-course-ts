import * as themes from 'themes';

const themeNames = Object.keys(themes);

export function theme(state = themeNames[0], action) {
  switch (action.type) {
    case 'SET_THEME': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
