import { Reducer } from "redux";
import { ActionWithPayload } from "../types";
import { themes } from "../../theme";

type Theme = keyof typeof themes;

export const theme: Reducer<Theme> = (state = "light", action) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      action = action as ActionWithPayload<"CHANGE_THEME", Theme>;
      return action.payload;
    }
  }
  return state;
};
