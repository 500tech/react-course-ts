export function createReducer(initialState, actionsHandlers) {
  return function (state=initialState, action) {
    if (action.type in actionsHandlers) {
      return actionsHandlers[action.type](state, action);
    }
    return state;
  }
}