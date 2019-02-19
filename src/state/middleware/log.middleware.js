export default store => {
  // on init
  return next => {
    // on ready
    return action => {
      // on action
      const oldState = store.getState();
      next(action);
      const newState = store.getState();
      console.log({ oldState, action, newState });
    };
  };
};
