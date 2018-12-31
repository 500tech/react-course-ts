import * as todosActions from './todos.actions';

const createAction = type => payload => ({ type, payload });

export const createTodo = createAction(todosActions.CREATE_TODO);

export const toggleTodo = createAction(todosActions.TOGGLE_TODO);
