import { createStore } from 'redux';

function counter(state = 0, action) {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  return state;
}

export default createStore(counter);
