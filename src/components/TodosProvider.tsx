import React, { createContext, useContext } from "react";
import uuid from "uuid";
import * as todosService from "../services/todos";

const TodosContext = createContext<
  ReturnType<typeof todosService.useTodosService> | undefined
>(undefined);

export function useTodos() {
  const ctx = useContext(TodosContext) as ReturnType<
    typeof todosService.useTodosService
  >;
  return ctx;
}

export const TodosProvider: React.FC = ({ children }) => {
  const ctx = todosService.useTodosService([
    { id: uuid(), text: "Learn hooks", done: false },
    { id: uuid(), text: "Eat breakfast", done: true }
  ]);
  return <TodosContext.Provider value={ctx}>{children}</TodosContext.Provider>;
};
