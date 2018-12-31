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
  switch (action) {
    case 'INCREMENT': {
      return state + 1;
    }
    default: {
      return state;
    }
  }
});

const counter = document.getElementById('counter');
// @TODO create a decrement button
// @TODO create a +n button that adds a random number (0-5)
const incrementButton = document.getElementById('increment');

store.subscribe(state => (counter.textContent = state));
incrementButton.onclick = () => store.dispatch('INCREMENT');
store.dispatch();
