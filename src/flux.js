const notify = Symbol('notify');

function createStore(initialValue, reducer) {
  let state = initialValue;
  const subscribers = new Set();
  return {
    getState() {
      return state;
    },
    [notify](action) {
      state = reducer(state, action);
      for (let sub of subscribers) {
        sub();
      }
    },
    subscribe(cb) {
      subscribers.add(cb);
      return () => subscribers.delete(cb);
    },
  };
}

const dispatcher = stores => action =>
  stores.forEach(store => store[notify](action));

function validator(predicate, wrappedReducer) {
  return function wrapperReducer(state, action) {
    const newState = wrappedReducer(state, action);
    return predicate(newState) ? newState : state;
  };
}

const countStore = createStore(
  0,
  validator(
    state => state >= 0 && state <= 5,
    (state, action) => {
      switch (action.type) {
        case 'INCREMENT':
          const { payload = 1 } = action;
          return state + payload;
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
      }
    }
  )
);

const dispatch = dispatcher([countStore]);
const counter = document.getElementById('counter');
for (let el of document.querySelectorAll('[data-action]')) {
  el.onclick = () =>
    dispatch({
      type: el.dataset.action,
      payload: el.dataset.payload ? eval(el.dataset.payload) : undefined,
    });
}
countStore.subscribe(() => {
  counter.textContent = countStore.getState();
  // document.querySelector(
  //   '[data-action=DECREMENT]'
  // ).disabled = !countStore.getState();
});
dispatch({ type: '@@INTERNAL__BOOTSTRAP__INIT' });
