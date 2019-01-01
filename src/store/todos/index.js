import { createSlice } from 'redux-starter-kit';
import { createAction } from 'redux-actions';

const todos = createSlice({
  slice: 'todos',
  initialState: null,
  reducers: {
    setTodos: (_state, { payload }) => payload,
    addTodo: (state, { payload }) => {
      state.push(payload);
    },
    toggleTodo: (state, { payload: index }) => {
      state[index].done = !state[index].done;
    },
  },
});

todos.actions.createTodo = createAction('todos/createTodos', null, todo => ({
  api: {
    url: '/api/todos',
    method: 'POST',
    body: todo,
    successAction: todos.actions.addTodo,
  },
}));

todos.actions.getTodos = createAction('todos/getTodos', null, () => ({
  api: {
    url: '/api/todos',
    successAction: todos.actions.setTodos,
  },
}));

export default todos;
