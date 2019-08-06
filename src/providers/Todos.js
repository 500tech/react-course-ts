import React, { useState, createContext } from 'react';

export const TodosContext = createContext();

export function TodosProvider({ children }) {
  const ctx = useState([]);
  return <TodosContext.Provider value={ctx}>{children}</TodosContext.Provider>;
}
