import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers/root';

const storeEnhancers = compose(
  applyMiddleware()
);

const store = createStore(rootReducer, {}, storeEnhancers);

export default store;
