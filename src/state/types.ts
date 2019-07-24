import { Action } from "redux";
import { themes } from "../theme";

export interface ActionWithPayload<T, P> extends Action<T> {
  payload: P;
}

export type Theme = keyof typeof themes;

export interface Todo {
  title: string;
  id: number;
  completed: boolean;
}
