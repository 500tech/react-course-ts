import { countStore, clicksStore, dispatch } from './state';

const counter = document.getElementById('counter');
const clicks = document.getElementById('clicks');
for (let el of document.querySelectorAll('button[data-action]')) {
  el.onclick = () =>
    dispatch({ type: el.dataset.action, payload: eval(el.dataset.payload) });
}
countStore.subscribe(state => {
  counter.textContent = state.toString();
});

clicksStore.subscribe(state => {
  clicks.textContent = state.toString();
});
dispatch({ type: '@@RANDOM_FOO_BAR' });
