import { createAction } from "redux-starter-kit";
import { Theme, Todo } from "./types";

export const changeTheme = createAction<Theme>("CHANGE_THEME");

export const editTodo = createAction<{
  todoId: Todo["id"];
  update: Partial<Todo>;
}>("EDIT_TODO");
export const deleteTodo = createAction<{ todoId: Todo["id"] }>("DELETE_TODO");
export const addTodo = createAction<{ title: string }>("ADD_TODO");
