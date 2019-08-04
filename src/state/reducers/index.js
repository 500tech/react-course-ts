import { combineReducers } from 'redux';
import { theme } from './theme';
import { todos } from './todos';
import { net } from './net';

export default combineReducers({ theme, todos, net });
