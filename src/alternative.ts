import {
  createStore,
  Reducer,
  combineReducers,
  Middleware,
  applyMiddleware
} from "redux";

const logger: Middleware = store => {
  // #1: called once, not all middleware had #1 phase yet
  return next => {
    // #2: called once, all middleware had their #1
    return action => {
      // #3: called on every action
      const oldState = store.getState();
      next(action);
      const newState = store.getState();
      console.log({ oldState, action, newState });
    };
  };
};

const delay: Middleware = _store => next => action => {
  setTimeout(next, 2000, action);
};

const countReducer: Reducer<number> = function(state = 0, action) {
  switch (action.type) {
    case "INCREMENT": {
      const { payload = 1 } = action;
      return state + +payload;
    }
    case "DECREMENT": {
      return state - 1;
    }
  }
  return state;
};

const clicksReducer: Reducer<number> = function(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
    case "DECREMENT": {
      return state + 1;
    }
  }
  return state;
};

const mainReducer = combineReducers({
  count: countReducer,
  clicks: clicksReducer
});

const store = createStore(mainReducer, applyMiddleware(logger, delay));

store.subscribe(() => {
  const { count, clicks } = store.getState();
  document.querySelector("#counter")!.textContent = count!.toString();
  document.querySelector("#clicks")!.textContent = clicks!.toString();
});

store.dispatch({ type: "@@INIT" });

for (let element of Array.from(document.querySelectorAll("[data-action]"))) {
  const { action, payload } = (element as HTMLElement).dataset as {
    action: string;
    payload?: string;
  };
  element.addEventListener("click", () =>
    store.dispatch({ type: action, payload })
  );
}