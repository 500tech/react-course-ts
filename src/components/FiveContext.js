import { createContext, useContext } from 'react';

const FiveContext = createContext();
export const FiveProvider = FiveContext.Provider;
export const FiveConsumer = FiveContext.Consumer;
export const useFive = () => useContext(FiveContext);
