/**
 * The case for immutability
 */

// @TODO make NOOP not expensive to render

function createStore(state, handleAction) {
  const stateSubscribers = new Set();
  return {
    dispatch(action) {
      handleAction(state, action);
      for (let sub of stateSubscribers) {
        sub(state);
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
      for (let i = 0; i < payload; i++) {
        state.push({});
      }
      return;
    }
    case 'DECREMENT': {
      state.pop();
      return;
    }
    default: {
      return;
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
