import { createStore } from 'redux';

/**
 * interface Action {
 *  type: string;
 *  payload?: jsonable;
 *  meta?: jsonable;
 *  error?: jsonable;
 * }
 */

function count(state = 0, action) {
  switch (action.type) {
    case 'INCEREMENT':
      return state + 1;
    case 'DECEREMENT':
      return state - 1;
    default:
      return state;
  }
}

function clicks(state = 0, action) {
  switch (action.type) {
    case 'INCEREMENT':
    case 'DECEREMENT':
      return state + 1;
    default:
      return state;
  }
}

// function master(state = {}, action) {
//   return {
//     count: count(state.count, action),
//     clicks: clicks(state.clicks, action),
//   };
// }

function combineReducers(keyToReducerMap) {
  return function(state = {}, action) {
    ///
  };
}

const store = createStore(
  combineReducers({
    count,
    clicks,
  })
);
console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: 'INCEREMENT' });
store.dispatch({ type: 'INCEREMENT' });
store.dispatch({ type: 'DECEREMENT' });
store.dispatch({ type: 'RANDOMALIT' });

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { App } from './components';

// ReactDOM.render(<App />, document.getElementById('root'));
