export const log = stores => next => action => {
  console.log(stores.countStore.getState());
  console.log(action);
  next(action);
  console.log(stores.countStore.getState());
};
