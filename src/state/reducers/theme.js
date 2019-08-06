import { SET_THEME } from 'state/actions';
import * as themes from 'theme';

const [initialTheme] = Object.keys(themes);

export function theme(state = initialTheme, action) {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
}
