import { createReducer } from "redux-starter-kit";
import { Todo } from "../types";
import { addTodo, editTodo, deleteTodo, setTodos } from "../actions";

export const todos = createReducer<Todo[]>([], {
  [`${addTodo}`]: (state, action: ReturnType<typeof addTodo>) => {
    state.unshift(action.payload);
  },
  [`${editTodo}`]: (state, action: ReturnType<typeof editTodo>) => {
    const todo = state.find(t => t.id === action.payload.id);
    if (todo) {
      Object.assign(todo, action.payload);
    }
  },
  [`${deleteTodo}`]: (state, action) => {
    return state.filter(t => t.id !== action.meta.originalPayload.todoId);
  },
  [`${setTodos}`]: (_state, action: ReturnType<typeof setTodos>) => {
    return action.payload;
  }
});
