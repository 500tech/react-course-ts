import * as actions from './types';

const action = (type, payload, meta, error) => ({ type, payload, meta, error });

export const increment = incrementBy => action(actions.INCREMENT, incrementBy);
export const decrement = () => action(actions.DECREMENT);
