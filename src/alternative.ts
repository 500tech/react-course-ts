import { createStore, Reducer, combineReducers } from "redux";

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

const store = createStore(mainReducer);

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
