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

const countStore = createStore(0, (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
});

const dispatch = dispatcher([countStore]);
const counter = document.getElementById('counter');
for (let el of document.querySelectorAll('[data-action]')) {
  el.onclick = () => dispatch({ type: el.dataset.action });
}
countStore.subscribe(() => (counter.textContent = countStore.getState()));
dispatch({ type: '@@INTERNAL__BOOTSTRAP__INIT' });
