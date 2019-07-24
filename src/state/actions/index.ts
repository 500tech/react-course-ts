import { createAction } from "redux-starter-kit";
import { createApiAction } from "./utils";
import { Theme, Todo } from "../types";

export const changeTheme = createAction<Theme>("CHANGE_THEME");

export const setTodos = createAction<Todo[]>("SET_TODOS");
export const fetchTodos = createApiAction("FETCH_TODOS", {
  url: "https://jsonplaceholder.typicode.com/todos",
  method: "GET",
  onSuccess: setTodos.toString()
});
export const editTodo = createAction<{
  todoId: Todo["id"];
  update: Partial<Todo>;
}>("EDIT_TODO");
export const deleteTodo = createAction<{ todoId: Todo["id"] }>("DELETE_TODO");
export const addTodo = createAction<Todo>("ADD_TODO");
export const postTodo = createApiAction<{ title: string }>(
  "POST_TODO",
  payload => ({
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "POST",
    onSuccess: addTodo.toString(),
    data: payload
  })
);
