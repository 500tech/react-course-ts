export function createStore(reducer) {
  const subscribers = new Set();
  let state = undefined;

  return {
    getState() {
      return state;
    },
    subscribe(cb) {
      subscribers.add(cb);
      return () => subscribers.delete(cb);
    },
    notify(action) {
      const newState = reducer(state, action);
      state = newState;
      for (let sub of subscribers) {
        sub(state);
      }
    },
  };
}
const baseDispatch = stores => () => action =>
  Object.values(stores).forEach(store => store.notify(action));

export const createDispatcher = (stores, middlewares = []) => {
  function dispatch(action) {
    mw2[0](action);
  }
  const mw = [...middlewares, baseDispatch].map(m => m(stores, dispatch));
  mw.reverse();
  const mw2 = [];
  for (let i = 0; i < mw.length; i++) {
    mw2.push(mw[i](mw2[i - 1]));
  }
  mw2.reverse();
  return dispatch;
};

