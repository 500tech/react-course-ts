import { createStore, combineReducers, applyMiddleware } from 'redux';

/**
 * {
 *    type: string;
 *    payload: Maybe(anything);
 *    meta: Maybe(anything);
 *    error: Maybe(Error);
 * }
 */

function count(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': {
      const { payload = 1 } = action;
      return state + payload;
    }
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function clicks(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
    case 'DECREMENT':
      return state + 1;
    default:
      return state;
  }
}

const logger = store => {
  // #1 - some MW may have initialized (happens once)
  return next => {
    // #2 - all MW have been initialized (happens once)
    return action => {
      // #3 - an action was dispatched
      const snapshotBefore = store.getState();
      const ref = JSON.parse(JSON.stringify(action));
      next(action);
      const snapshotAfter = store.getState();
      console.log({ snapshotBefore, action: ref, snapshotAfter });
    };
  };
};

const evalPayload = _store => next => action => {
  if (action.meta && action.meta.eval && action.payload) {
    // eslint-disable-next-line
    action.payload = eval(action.payload);
  }
  next(action);
};

const mainReducer = combineReducers({
  count,
  clicks,
});

class UI {
  constructor(store) {
    this.store = store;
    this.counter = document.getElementById('count');
    this.clicks = document.getElementById('clicks');
    this._bootstrapEvents();
  }

  _bootstrapEvents() {
    this.store.subscribe(() => this.render());
    for (let e of document.querySelectorAll('[data-action]')) {
      const { action: type, payload } = e.dataset;
      e.addEventListener('click', () =>
        this.store.dispatch({ type, payload, meta: { eval: true } })
      );
    }
  }

  render() {
    const { count, clicks } = this.store.getState();
    this.counter.textContent = count.toString();
    this.clicks.textContent = clicks.toString();
  }
}

const store = createStore(mainReducer, applyMiddleware(logger, evalPayload));
const ui = new UI(store);

ui.render();
