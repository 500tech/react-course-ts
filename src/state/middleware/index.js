import logger from 'redux-logger';
import { api } from './api';

export default [
  logger,
  api,
  store => next => action => {
    next(action);
    if (action.error) alert(action.error);
  },
];
