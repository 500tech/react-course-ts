import * as actions from '../actions/count.actions';
import { createReducer } from './utils'

export const count = createReducer(0, {
  [actions.increment]: state => state + 1,
  [actions.decrement]: state => state - 1,
  [actions.setCount]: (_state, action) => action.payload,
});
