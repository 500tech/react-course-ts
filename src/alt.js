import { createStore, combineReducers, applyMiddleware } from 'redux';

/**
 * interface Action {
 *  type: string;
 *  payload?: any;
 *  meta?: object;
 *  error?: Error;
 * }
 */

const logger = store => {
  // phase #1 some middleware inited (called once)
  return next => {
    // phase #2 all middleware inited (called once)
    return action => {
      // phase #3 (called every action)
      const oldState = store.getState();
      next(action);
      const newState = store.getState();
      console.log({ action, oldState, newState });
    };
  };
};

function count(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': {
      const { payload = 1 } = action;
      return state + payload;
    }
    case 'DECREMENT': {
      const { payload = 1 } = action;
      return state - payload;
    }
    default: {
      return state;
    }
  }
}

function clicks(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
    case 'DECREMENT':
    case 'CLICK': {
      return state + 1;
    }
    default: {
      return state;
    }
  }
}

const store = createStore(
  combineReducers({
    count,
    clicks,
  }),
  applyMiddleware(logger)
);

for (let e of document.querySelectorAll('[data-action]')) {
  const type = e.dataset.action;
  const { payload } = e.dataset;
  e.addEventListener('click', () =>
    // eslint-disable-next-line
    store.dispatch({ type, payload: eval(payload) })
  );
}
const countText = document.getElementById('count');
const clicksText = document.getElementById('clicks');
store.subscribe(() => {
  const { clicks, count } = store.getState();
  countText.textContent = count.toString();
  clicksText.textContent = clicks.toString();
});

store.dispatch({ type: '@@INIT' });
