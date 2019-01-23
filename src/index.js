import { createStore, combineReducers, applyMiddleware } from 'redux';

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      const { payload = 1 } = action;
      return state + payload;
    }
    case 'DECREMENT': {
      return state - 1;
    }
    case 'LOGIN': {
      return 0;
    }
    case 'SET_COUNT': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const postReducer = (state = { title: null, body: null }, action) => {
  switch (action.type) {
    case 'SET_POST': {
      const { title, body } = action.payload;
      return { title, body };
    }
    default: {
      return state;
    }
  }
};

const loggerMiddleware = store => next => action => {
  const oldState = store.getState();
  next(action);
  const newState = store.getState();
  console.log({ oldState, action, newState });
};

const ensureMinCount = min => store => next => action => {
  next(action);
  if (store.getState().count < min) {
    store.dispatch({ type: 'SET_COUNT', payload: min });
  }
};

/**
 * interface Action {
 *   type: string
 *   payload?: any
 *   meta?: any[object]
 *   error?: any[object|Error|string]
 * }
 */
const apiMiddleware = store => {
  const host = 'https://jsonplaceholder.typicode.com';
  return next => async action => {
    next(action);
    if (action.meta && action.meta.api) {
      const {
        url,
        successAction = 'API_SUCCESS',
        failureAction = 'API_FAILURE',
      } = action.meta.api;
      try {
        const response = await fetch(`${host}${url}`);
        if (!response.ok) {
          throw new Error('Bad HTTP request:' + response.statusText);
        }
        const payload = await response.json();
        store.dispatch({
          type: successAction,
          payload,
        });
      } catch (error) {
        store.dispatch({
          type: failureAction,
          error,
        });
      }
    }
  };
};

const store = createStore(
  combineReducers({
    count: countReducer,
    post: postReducer,
  }),
  applyMiddleware(apiMiddleware, ensureMinCount(0), loggerMiddleware)
);

const counter = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const randomButton = document.getElementById('random');

function getRandom() {
  return Math.round(Math.random() * 10);
}

function increment(incrementBy = 1) {
  return { type: 'INCREMENT', payload: incrementBy };
}

function renderPost({ title, body }) {
  document.getElementById('post-title').textContent = title;
  document.getElementById('post-body').textContent = body;
}

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.count;
  decrementButton.disabled = state.count === 0;
  renderPost(state.post);
});
incrementButton.onclick = () => store.dispatch({ type: 'INCREMENT' });
decrementButton.onclick = () => store.dispatch({ type: 'DECREMENT' });
randomButton.onclick = () => store.dispatch(increment(getRandom()));
document.getElementById('load-post').onclick = () => {
  store.dispatch({
    type: 'LOAD_POST',
    meta: {
      api: {
        url: '/posts/1',
        successAction: 'SET_POST',
      },
    },
  });
};
store.dispatch({ type: 'INIT' });
