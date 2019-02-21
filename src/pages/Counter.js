import React, { useState, useEffect } from 'react';
import { store } from '../state';

export function Counter() {
  const [count, setCount] = useState(store.getState().count);
  useEffect(() => store.subscribe(() => setCount(store.getState().count)), []);
  return <p>{count}</p>;
}
