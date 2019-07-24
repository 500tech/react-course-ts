import { createAction } from "redux-starter-kit";
import { createApiAction } from "./utils";
import { Theme, Todo } from "../types";

export const changeTheme = createAction<Theme>("CHANGE_THEME");

export const setTodos = createAction<Todo[]>("SET_TODOS");
export const fetchTodos = createApiAction("FETCH_TODOS", {
  label: 'todos',
  url: "https://jsonplaceholder.typicode.com/todos",
  method: "GET",
  onSuccess: setTodos.toString()
});

export const editTodo = createAction<Todo>("EDIT_TODO");
export const updateTodo = createApiAction<{
  todoId: Todo["id"];
  update: Partial<Todo>;
}>("UPDATE_TODO", payload => ({
  label: 'todos',
  url: `https://jsonplaceholder.typicode.com/todos/${payload.todoId}`,
  method: "PATCH",
  onSuccess: editTodo.toString(),
  data: payload.update
}));

export const deleteTodo = createAction("DELETE_TODO");
export const removeTodo = createApiAction<{ todoId: Todo["id"] }>(
  "REMOVE_TODO",
  payload => ({
    label: 'todos',
    url: `https://jsonplaceholder.typicode.com/todos/${payload.todoId}`,
    method: "DELETE",
    onSuccess: deleteTodo.toString()
  })
);

export const addTodo = createAction<Todo>("ADD_TODO");
export const postTodo = createApiAction<{ title: string }>(
  "POST_TODO",
  payload => ({
    label: 'todos',
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "POST",
    onSuccess: addTodo.toString(),
    data: payload
  })
);

export const startAsync = createAction<string>('START_ASYNC');
export const endAsync = createAction<string>('END_ASYNC');