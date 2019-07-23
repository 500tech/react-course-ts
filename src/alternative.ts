import { createStore, Reducer } from "redux";

const stateReducer: Reducer<number> = function(state = 0, action) {
  switch (action.type) {
    case "INCREMENT": {
      const { payload = 1 } = action;
      return state + (+payload);
    }
    case "DECREMENT": {
      return state - 1;
    }
  }
  return state;
};

const store = createStore(stateReducer);

store.subscribe(() => {
  document.querySelector("#counter")!.textContent = store.getState().toString();
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
