import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

let currentId = 0;

export const getId = () => currentId++;

export const NOOP = () => null;

export function useAction(actionCreator) {
  const dispatch = useDispatch();
  return useCallback((...args) => dispatch(actionCreator(...args)), [
    dispatch,
    actionCreator,
  ]);
}
