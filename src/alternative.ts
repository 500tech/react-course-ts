import { createStore, Reducer } from "redux";

const stateReducer: Reducer<number> = function(state = 0, action) {
  switch (action.type) {
    case "INCREMENT": {
      return state + 1;
    }
  }
  return state;
};

const store = createStore(stateReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'FOO' });
store.dispatch({ type: 'INCREMENT' });