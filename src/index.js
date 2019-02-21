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

function createStore(reducer) {
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

const countStore = createStore((state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      const { payload = 1 } = action;
      return state + payload;
    }
    case 'DECREMENT': {
      return state - 1;
    }
    default: {
      return state;
    }
  }
});

const clicksStore = createStore((state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
    case 'DECREMENT': {
      return state + 1;
    }
    default: {
      return state;
    }
  }
});

const logMiddleware = stores => next => action => {
  console.log(stores.countStore.getState());
  console.log(action);
  next(action);
  console.log(stores.countStore.getState());
};
const dispatch = createDispatcher({ countStore, clicksStore }, [logMiddleware]);
const counter = document.getElementById('counter');
const clicks = document.getElementById('clicks');
for (let el of document.querySelectorAll('button[data-action]')) {
  el.onclick = () =>
    dispatch({ type: el.dataset.action, payload: eval(el.dataset.payload) });
}
countStore.subscribe(state => {
  counter.textContent = state.toString();
});

clicksStore.subscribe(state => {
  clicks.textContent = state.toString();
});
dispatch({ type: '@@RANDOM_FOO_BAR' });
