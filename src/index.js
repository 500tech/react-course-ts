/**
 * [userStore]
 * [postsStore]
 * [commentsStore]
 *
 * [UI]
 * -[interaction:click]->
 * [ACTION:LOGIN({username, password})]
 * [DISPATCHER]
 * [...stores]
 */

function createStore(reducer, initialState) {
  const subscribers = new Set();
  let state = initialState;

  return {
    getState() {
      return state;
    },
    subscribe(cb) {
      subscribers.add(cb);
      return () => subscribers.delete(cb);
    },
    notify(action) {
      const newState = reducer(state, action);
      state = newState;
      for (let sub of subscribers) {
        sub(state);
      }
    },
  };
}

/**
 * interface Action {
 *  type: string,
 *  payload?: jsonable,
 *  meta?: {},
 *  error?: {} | string,
 * }
 */

const countStore = createStore((state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1;
    }
    default: {
      return state;
    }
  }
}, 0);

const states = [];
countStore.subscribe(state => {
  states.push(state);
  console.log(states);
});

countStore.notify({ type: '@@RANDOM_FOO_BAR' });
countStore.notify({ type: 'INCREMENT' });
countStore.notify({ type: 'INCREMENT' });
countStore.notify({ type: 'INCREMENT' });
