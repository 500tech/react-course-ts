import { applyMiddleware } from 'redux';
import { log } from './log.middleware';
import { api } from './api.middleware';
export default applyMiddleware(log(console.log), api);
