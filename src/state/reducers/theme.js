import * as themes from 'themes';

const names = Object.keys(themes);
const [INITIAL_THEME] = names;
const namesSet = new Set(names);

export function theme(state = INITIAL_THEME, action) {
  switch (action.type) {
    case 'SET_THEME': {
      if (namesSet.has(action.payload)) {
        return action.payload;
      }
      return state;
    }
    default: {
      return state;
    }
  }
}
