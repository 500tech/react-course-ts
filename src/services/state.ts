import { useCallback } from "react";
import { createAction } from "redux-starter-kit";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../state";

export function useAppSelector<T>(selector: (state: State) => T) {
  return useSelector(selector);
}

export function useAction(actionCreator: ReturnType<typeof createAction>) {
  const dispatch = useDispatch();
  const actionDispatcher = useCallback(
    (...args: Parameters<typeof actionCreator>) => {
      dispatch(actionCreator(...args));
    },
    [actionCreator, dispatch]
  );
  return actionDispatcher;
}
