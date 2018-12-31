/**
 * The case for immutability
 */

function createStore(state, handleAction) {
  const stateSubscribers = new Set();
  return {
    dispatch(action) {
      const newState = handleAction(state, action);
      if (newState !== state || action.type === 'INIT') {
        state = newState;
        for (let sub of stateSubscribers) {
          sub(state);
        }
      }
    },
    subscribe(cb) {
      stateSubscribers.add(cb);
      return () => stateSubscribers.delete(cb);
    },
  };
}

const store = createStore(Array.from({ length: 1000 }), function handleState(
  state,
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

store.subscribe(function veryExpensiveFunction(state) {
  state.forEach(() => state.forEach(() => state.forEach(() => null)));
  counter.textContent = state.length;
});
store.dispatch({ type: 'INIT' });
