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
const baseDispatch = stores => () => action =>
  Object.values(stores).forEach(store => store.notify(action));
const createDispatcher = (stores, middlewares = []) => {
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
const logMiddleware = stores => next => action => {
  console.log(stores.countStore.getState());
  console.log(action);
  next(action);
  console.log(stores.countStore.getState());
};
const dispatch = createDispatcher({ countStore }, [logMiddleware]);
const counter = document.getElementById('counter');
for (let el of document.querySelectorAll('button[data-action]')) {
  el.onclick = () => dispatch({ type: el.dataset.action });
}
countStore.subscribe(state => {
  counter.textContent = state.toString();
});
dispatch({ type: '@@RANDOM_FOO_BAR' });
