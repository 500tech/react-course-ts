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

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return action.payload;
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

const store = createStore(
  combineReducers({
    count: countReducer,
    user: userReducer,
  }),
  applyMiddleware(ensureMinCount(0), loggerMiddleware)
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
store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.count;
  // decrementButton.disabled = state.count === 0;
  if (state.user) {
    document.getElementById('user').textContent = state.user;
  }
});
incrementButton.onclick = () => store.dispatch({ type: 'INCREMENT' });
decrementButton.onclick = () => store.dispatch({ type: 'DECREMENT' });
randomButton.onclick = () => store.dispatch(increment(getRandom()));
store.dispatch({ type: 'INIT' });
setTimeout(() => store.dispatch({ type: 'LOGIN', payload: 'foobar' }), 5000);
