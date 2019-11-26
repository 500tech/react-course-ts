import { createContext } from 'react';

const TodosContext = createContext();

export const TodosProvider = TodosContext.Provider;

export const TodosConsumer = TodosContext.Consumer;
