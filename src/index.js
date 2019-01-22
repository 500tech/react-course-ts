/**
 * Flux:
 *
 * UI -[creates]-> action -[through]-> dispatcher -[affects]-> state -[affects]-> UI
 *
 * For example:
 * Todo List -[onClick]-> TOGGLE_TODO_ITEM -> (...) -> state = !state -> Todo list updates
 */

function createStore(initialState, stateReducer) {
  const subscribers = new Set();
  let state = initialState;

  function notify() {
    for (let sub of subscribers) {
      sub(state);
    }
  }

  return {
    getState() {
      return state;
    },
    subscribe(cb) {
      subscribers.add(cb);
      return () => subscribers.delete(cb);
    },
    dispatch(action) {
      const newState = stateReducer(state, action);
      if (newState !== state) {
        state = newState;
        notify();
      }
    },
  };
}

function createDispatcher(...stores) {
  return action => stores.forEach(store => store.dispatch(action));
}

const countStore = createStore(0, (state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1;
    }
    default: {
      return state;
    }
  }
});

const dispatch = createDispatcher(countStore);

const counter = document.getElementById('counter');
const incrementButton = document.getElementById('increment');

countStore.subscribe(state => (counter.textContent = state));
incrementButton.onclick = () => dispatch({ type: 'INCREMENT' });
counter.textContent = countStore.getState();
