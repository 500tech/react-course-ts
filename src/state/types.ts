import { Action } from "redux";

export interface ActionWithPayload<T, P> extends Action<T> {
  payload: P;
}
