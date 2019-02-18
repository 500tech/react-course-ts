function createStore(initialValue, reducer) {
  let state = initialValue;
  const subscribers = new Set();
  return {
    getState() {
      return state;
    },
    notify(action) {
      state = reducer(state, action);
      for (let sub of subscribers) {
        sub();
      }
    },
    subscribe(cb) {
      subscribers.add(cb);
      return () => subscribers.delete(cb);
    },
  };
}

const countStore = createStore(0, (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
});

countStore.subscribe(() => console.log(countStore.getState()));
countStore.notify({ type: '@@INTERNAL__BOOTSTRAP__INIT' });
countStore.notify({ type: 'INCREMENT' });
countStore.notify({ type: 'INCREMENT' });
countStore.notify({ type: 'INCREMENT' });
