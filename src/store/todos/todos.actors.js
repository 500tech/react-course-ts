import * as todosActions from './todos.actions';
import { createAction } from '../utils';

export const createTodo = createAction(todosActions.CREATE_TODO);

export const toggleTodo = createAction(todosActions.TOGGLE_TODO);
