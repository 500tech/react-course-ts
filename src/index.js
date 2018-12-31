/**
 * Flux:
 *
 * UI -[creates]-> action -[through]-> dispatcher -[affects]-> state -[affects]-> UI
 *
 * For example:
 * Todo List -[onClick]-> TOGGLE_TODO_ITEM -> (...) -> state = !state -> Todo list updates
 */

function createStore(state, handleAction) {
  const stateSubscribers = new Set();
  return {
    dispatch(action) {
      state = handleAction(state, action);
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

const store = createStore(0, function handleState(state, action) {
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

const counter = document.getElementById('counter');
document.getElementById('increment').onclick = () =>
  store.dispatch({ type: 'INCREMENT' });
document.getElementById('decrement').onclick = () =>
  store.dispatch({ type: 'DECREMENT' });
document.getElementById('n-increment').onclick = () =>
  store.dispatch({ type: 'INCREMENT', payload: Math.round(Math.random() * 5) });

store.subscribe(state => (counter.textContent = state));
store.dispatch({ type: 'INIT' });
