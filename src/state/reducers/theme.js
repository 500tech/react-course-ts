import * as themes from 'theme';
import { SET_THEME } from 'state/actions';

const themeNames = Object.keys(themes);

export function theme(state = themeNames[0], action) {
  switch (action.type) {
    case SET_THEME: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
