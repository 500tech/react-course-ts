import * as actions from './types';
import { createAction } from './utils';

export const increment = createAction(actions.INCREMENT);
export const decrement = createAction(actions.DECREMENT);
export const setCount = createAction(actions.SET_COUNT);
