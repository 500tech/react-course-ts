import { createStore } from 'redux';

const store = createStore(function itemsReducer(
  state = Array.from({ length: 1000 }),
  action
) {
  switch (action.type) {
    case 'INCREMENT': {
      const { payload = 1 } = action;
      return state.concat(Array.from({ length: payload }));
    }
    case 'DECREMENT': {
      return state.slice(0, state.length - 1);
    }
    default: {
      return state;
    }
  }
});

const counter = document.getElementById('counter');
document.getElementById('increment').onclick = () =>
  store.dispatch({ type: 'INCREMENT' });
document.getElementById('decrement').onclick = () =>
  store.dispatch({ type: 'DECREMENT' });
document.getElementById('n-increment').onclick = () =>
  store.dispatch({ type: 'INCREMENT', payload: Math.round(Math.random() * 5) });
document.getElementById('noop').onclick = () =>
  store.dispatch({ type: 'NOOP' });

const memoizeSubscribe = onStateChange => {
  let lastState;
  store.subscribe(() => {
    const state = store.getState();
    if (lastState !== state) {
      lastState = state;
      onStateChange(state);
    }
  });
};

memoizeSubscribe(function veryExpensiveFunction(state) {
  state.forEach(() => state.forEach(() => state.forEach(() => null)));
  counter.textContent = state.length;
});

store.dispatch({ type: 'INIT' });
