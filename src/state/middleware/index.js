import { applyMiddleware } from 'redux';
import log from './log.middleware';

export default applyMiddleware(log);
