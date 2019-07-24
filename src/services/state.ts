import { useCallback } from "react";
import { PayloadAction } from "redux-starter-kit";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../state";

export function useAppSelector<T>(selector: (state: State) => T) {
  return useSelector(selector);
}

export function useAction<T=undefined>(actionCreator: (payload: T) => PayloadAction<T>) {
  const dispatch = useDispatch();
  const actionDispatcher = useCallback(
    (payload?: T) => {
      dispatch(actionCreator(payload as T));
    },
    [actionCreator, dispatch]
  );
  return actionDispatcher;
}

export function useIsLoading(label?: string) {
  return useAppSelector(state => {
    if (label) {
      return state.loading[label] > 0;
    }
    return Object.values(state.loading).some(value => value > 0);
  })
}