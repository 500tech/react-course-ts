import {applyMiddleware, compose, createStore} from 'redux';
import api from './middlewares/api';
import rootReducer from './reducers/root';

const storeEnhancers = compose(
  applyMiddleware(api)
);

const store = createStore(rootReducer, {}, storeEnhancers);

export default store;
