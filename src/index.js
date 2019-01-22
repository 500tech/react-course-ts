import { createStore, combineReducers } from 'redux';

const countReducer = (state = 0, action) => {
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

const store = createStore(
  combineReducers({
    count: countReducer,
    user: userReducer,
  })
);

function mapperMiddleware(stateMapper) {
  return stateReducer => (state, action) =>
    stateMapper(stateReducer(state, action));
}

function loggerMiddleware(reducer) {
  return (state, action) => {
    console.log(state);
    console.log(action);
    const newState = reducer(state, action);
    console.log(newState);
    return newState;
  };
}

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
  decrementButton.disabled = state.count === 0;
  if (state.user) {
    document.getElementById('user').textContent = state.user;
  }
});
incrementButton.onclick = () => store.dispatch({ type: 'INCREMENT' });
decrementButton.onclick = () => store.dispatch({ type: 'DECREMENT' });
randomButton.onclick = () => store.dispatch(increment(getRandom()));
store.dispatch({ type: 'INIT' });
setTimeout(() => store.dispatch({ type: 'LOGIN', payload: 'foobar' }), 5000);
