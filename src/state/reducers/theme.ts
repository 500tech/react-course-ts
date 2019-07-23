import { createReducer } from "redux-starter-kit";
import { Theme } from "../types";
import { changeTheme } from "../actions";

export const theme = createReducer<Theme>("light", {
  [`${changeTheme}`]: (_state, action: ReturnType<typeof changeTheme>) => {
    return action.payload;
  }
});
