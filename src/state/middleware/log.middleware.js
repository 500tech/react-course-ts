export const log = logger => store => next => action => {
  logger(store.getState());
  logger(action);
  next(action);
  logger(store.getState());
};
