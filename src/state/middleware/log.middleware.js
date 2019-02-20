import { diff } from 'deep-diff';

export const log = store => next => action => {
  const oldState = store.getState();
  next(action);
  const newState = store.getState();
  console.log({ action, stateDiff: diff(oldState, newState) });
};