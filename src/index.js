/**
 * Flux:
 *
 * UI -[creates]-> action -[through]-> dispatcher -[affects]-> state -[affects]-> UI
 *
 * For example:
 * Todo List -[onClick]-> TOGGLE_TODO_ITEM -> (...) -> state = !state -> Todo list updates
 */

const compose = (...fns) => arg => {
  for (let fn of fns) {
    arg = fn(arg);
  }
  return arg;
};

function createStore(initialState, stateReducer, middlewares) {
  stateReducer = middlewares
    ? compose(...middlewares)(stateReducer)
    : stateReducer;
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
    dispatch(action, force) {
      const newState = stateReducer(state, action);
      if (newState !== state || force) {
        state = newState;
        notify();
      }
    },
  };
}

function createDispatcher(...stores) {
  return (action, force) =>
    stores.forEach(store => store.dispatch(action, force));
}

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

const countStore = createStore(
  0,
  (state, action) => {
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
  },
  [loggerMiddleware, mapperMiddleware(state => Math.max(state, 0))]
);

const dispatch = createDispatcher(countStore);

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
countStore.subscribe(state => (counter.textContent = state));
incrementButton.onclick = () => dispatch({ type: 'INCREMENT' });
decrementButton.onclick = () => dispatch({ type: 'DECREMENT' });
randomButton.onclick = () => dispatch(increment(getRandom()));
countStore.subscribe(state => (decrementButton.disabled = state === 0));
dispatch({ type: 'INIT' }, true);
