import { createContext } from 'react';

export const TodosContext = createContext();

export const TodosProvider = TodosContext.Provider;

export const TodosConsumer = TodosContext.Consumer;
