import { createContext } from 'react';

const { Provider, Consumer } = createContext(0);
export const CountProvider = Provider;
export const CountConsumer = Consumer;
