import * as actions from './types';
import { action } from './utils';

export const addTodo = text => action(actions.ADD_TODO, text);
export const toggleTodo = tid => action(actions.TOGGLE_TODO, tid);
