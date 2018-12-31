import * as counterActions from './counter.actions';
import { createAction } from '../utils';

export const increment = createAction(counterActions.INCREMENT);
export const decrement = createAction(counterActions.DECREMENT);
