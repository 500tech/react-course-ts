import { Reducer } from "redux";
import uuid from "uuid";
import { ActionWithPayload } from "../types";

export interface Todo {
  text: string;
  id: string;
  done: boolean;
}

export const todos: Reducer<Todo[]> = (state = [], action) => {
  switch (action.type) {
    case "EDIT_TODO": {
      action = action as ActionWithPayload<
        "EDIT_TODO",
        { todoId: string; update: Partial<Todo> }
      >;
      return state.map(t =>
        t.id === action.payload.todoId
          ? {
              ...t,
              ...action.payload.update
            }
          : t
      );
    }
    case "DELETE_TODO": {
      action = action as ActionWithPayload<"DELETE_TODO", { todoId: string }>;
      return state.filter(t => t.id !== action.payload.todoId);
    }
    case "ADD_TODO": {
      action = action as ActionWithPayload<"ADD_TODO", { text: string }>;
      return [{ id: uuid(), text: action.payload.text, done: false }, ...state];
    }
  }
  return state;
};
