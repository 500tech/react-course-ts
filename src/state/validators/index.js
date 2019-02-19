export default function validator(predicate, wrappedReducer) {
  return function wrapperReducer(state, action) {
    const newState = wrappedReducer(state, action);
    return predicate(newState) ? newState : state;
  };
}
