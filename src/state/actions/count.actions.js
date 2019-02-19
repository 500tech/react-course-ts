import * as actions from './types';
import { action } from './utils';

export const increment = incrementBy => action(actions.INCREMENT, incrementBy);
export const decrement = () => action(actions.DECREMENT);
