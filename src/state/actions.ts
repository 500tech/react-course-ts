import { createAction, PayloadAction } from "redux-starter-kit";
import { AxiosRequestConfig } from "axios";
import { Theme, Todo } from "./types";

type ApiLabel = AxiosRequestConfig & {
  onSuccess?: string;
  onFailure?: string;
};

export interface APIAction<Payload = any> extends PayloadAction<Payload> {
  meta: {
    api: ApiLabel | ((payload: Payload) => ApiLabel);
  };
}

function createApiAction<Payload = undefined>(
  actionType: string,
  apiLabel: APIAction["meta"]["api"]
) {
  const actionCreator = createAction<Payload>(actionType) as (
    payload: Payload
  ) => PayloadAction<Payload>;
  const apiActionCreator = (payload: Payload) => {
    const action = actionCreator(payload);
    return Object.assign(action, {
      meta: {
        api: apiLabel
      }
    }) as APIAction<Payload>;
  };
  apiActionCreator.toString = () => actionType;
  return apiActionCreator;
}

export const changeTheme = createAction<Theme>("CHANGE_THEME");

export const fetchTodos = createApiAction("FETCH_TODOS", {
  url: "https://jsonplaceholder.typicode.com/todos",
  method: "GET"
});
export const editTodo = createAction<{
  todoId: Todo["id"];
  update: Partial<Todo>;
}>("EDIT_TODO");
export const deleteTodo = createAction<{ todoId: Todo["id"] }>("DELETE_TODO");
export const addTodo = createAction<{ title: string }>("ADD_TODO");
