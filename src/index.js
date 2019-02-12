/**
 * [userStore]
 * [postsStore]
 * [commentsStore]
 *
 * [UI]
 * -[interaction:click]->
 * [ACTION:LOGIN({username, password})]
 * [DISPATCHER]
 * [...stores]
 */

function createStore(reducer, initialState) {
  const subscribers = new Set();
  let state = initialState;

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
const createDispatcher = stores => action =>
  stores.forEach(store => store.notify(action));

/**
 * interface Action {
 *  type: string,
 *  payload?: jsonable,
 *  meta?: {},
 *  error?: {} | string,
 * }
 */

const countStore = createStore((state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1;
    }
    default: {
      return state;
    }
  }
}, 0);
const dispatch = createDispatcher([countStore]);
const counter = document.getElementById('counter');
for (let el of document.querySelectorAll('button[data-action]')) {
  el.onclick = () => dispatch({ type: el.dataset.action });
}
countStore.subscribe(state => {
  counter.textContent = state.toString();
});
dispatch({ type: '@@RANDOM_FOO_BAR' });
