import { createContext } from 'react';

export const CountContext = createContext(0);
export const CountProvider = CountContext.Provider;
export const CountConsumer = CountContext.Consumer;
