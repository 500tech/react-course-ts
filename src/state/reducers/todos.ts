import { createReducer } from "redux-starter-kit";
import { Todo } from "../types";
import { addTodo, editTodo, deleteTodo } from "../actions";

let id = 0;

export const todos = createReducer<Todo[]>([], {
  [`${addTodo}`]: (state, action: ReturnType<typeof addTodo>) => {
    state.unshift({ id: id++, title: action.payload.title, completed: false });
  },
  [`${editTodo}`]: (state, action: ReturnType<typeof editTodo>) => {
    const todo = state.find(t => t.id === action.payload.todoId);
    if (todo) {
      Object.assign(todo, action.payload.update);
    }
  },
  [`${deleteTodo}`]: (state, action: ReturnType<typeof deleteTodo>) => {
    return state.filter(t => t.id !== action.payload.todoId);
  }
});
