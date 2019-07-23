import { createAction } from "redux-starter-kit";
import { Theme, Todo } from "./types";

export const changeTheme = createAction<Theme>("CHANGE_THEME");

export const editTodo = createAction<{ todoId: string; update: Partial<Todo> }>(
  "EDIT_TODO"
);
export const deleteTodo = createAction<{ todoId: string }>("DELETE_TODO");
export const addTodo = createAction<{ text: string }>("ADD_TODO");
