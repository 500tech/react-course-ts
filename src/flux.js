import { createStore, combineReducers, applyMiddleware } from 'redux';

const log = store => {
  // on init
  return next => {
    // on ready
    return action => {
      // on action
      const oldState = store.getState();
      next(action);
      const newState = store.getState();
      console.log({ oldState, action, newState });
    };
  };
};

function validator(predicate, wrappedReducer) {
  return function wrapperReducer(state, action) {
    const newState = wrappedReducer(state, action);
    return predicate(newState) ? newState : state;
  };
}

const countReducer = validator(
  state => state >= 0 && state <= 5,
  (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        const { payload = 1 } = action;
        return state + payload;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }
);

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const { username, password } = action.payload;
      return { username, password };
    }
    default: {
      return state;
    }
  }
};

function nonGenericMainReducer(state = {}, action) {
  return {
    count: countReducer(state.count, action),
    user: userReducer(state.user, action),
  };
}

const mainReducer = combineReducers({
  count: countReducer,
  user: userReducer,
});

const store = createStore(mainReducer, applyMiddleware(log));

const dispatch = store.dispatch;
const counter = document.getElementById('counter');
for (let el of document.querySelectorAll('[data-action]')) {
  el.onclick = () =>
    dispatch({
      type: el.dataset.action,
      payload: el.dataset.payload ? eval(el.dataset.payload) : undefined,
    });
}
store.subscribe(() => {
  counter.textContent = store.getState().count;
  // document.querySelector(
  //   '[data-action=DECREMENT]'
  // ).disabled = !store.getState();
});
dispatch({ type: '@@INTERNAL__BOOTSTRAP__INIT' });
