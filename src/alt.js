import { createStore, combineReducers } from 'redux';

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
      let { action: type, payload } = e.dataset;
      if (payload) {
        // eslint-disable-next-line
        payload = eval(payload);
      }
      e.addEventListener('click', () => this.store.dispatch({ type, payload }));
    }
  }

  render() {
    const { count, clicks } = this.store.getState();
    this.counter.textContent = count.toString();
    this.clicks.textContent = clicks.toString();
  }
}

const store = createStore(mainReducer);
const ui = new UI(store);

ui.render();
