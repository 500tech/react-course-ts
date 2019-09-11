import React, { createContext, useState, useContext } from 'react';
import { getUniqueId } from 'utils';

const TodosContext = createContext();

export function useTodosContext() {
  return useContext(TodosContext);
}

const TODOS = [
  { id: getUniqueId(), title: 'Go home', completed: false },
  { id: getUniqueId(), title: 'Order 10bis', completed: true },
  { id: getUniqueId(), title: 'Take a break', completed: false },
];

export function TodosProvider({ children }) {
  const ctx = useState(TODOS);
  return <TodosContext.Provider value={ctx}>{children}</TodosContext.Provider>;
}
