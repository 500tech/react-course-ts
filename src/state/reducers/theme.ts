import { Reducer } from 'redux';

type Theme = 'light' | 'dark';

export const theme: Reducer<Theme> = (state = 'light', action) => {
  return state;
}