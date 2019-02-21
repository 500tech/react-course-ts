import { store } from './state';

const counter = document.getElementById('counter');
const clicks = document.getElementById('clicks');
for (let el of document.querySelectorAll('button[data-action]')) {
  el.onclick = () =>
    store.dispatch({
      type: el.dataset.action,
      payload: eval(el.dataset.payload),
    });
}
store.subscribe(() => {
  counter.textContent = store.getState().count.toString();
});

store.subscribe(() => {
  clicks.textContent = store.getState().clicks.toString();
});
store.dispatch({ type: '@@RANDOM_FOO_BAR' });
