export default store => next => action => {
  const oldState = store.getState();
  next(action);
  const newState = store.getState();
  console.log({
    oldState,
    action: {
      ...action,
      type: action.type.toString(),
    },
    newState,
  });
};
