import * as themes from 'theme';
import { SET_THEME } from 'state/actions';

const [initialTheme] = Object.keys(themes);

export function theme(state = initialTheme, action) {
  switch (action.type) {
    case SET_THEME: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
