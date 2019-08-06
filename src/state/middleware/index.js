import logger from 'redux-logger';
import { api } from './api';

export default [process.env.NODE_ENV === 'development' && logger, api].filter(
  Boolean
);
