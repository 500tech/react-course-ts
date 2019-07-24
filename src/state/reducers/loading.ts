import { createReducer } from "redux-starter-kit";
import { startAsync, endAsync } from "../actions";

export type Loading = {
  [label: string]: number;
};

export const loading = createReducer<Loading>(
  {},
  {
    [`${startAsync}`]: (state, action: ReturnType<typeof startAsync>) => {
      if (!state[action.payload]) {
        state[action.payload] = 0;
      }
      state[action.payload]++;
    },
    [`${endAsync}`]: (state, action: ReturnType<typeof endAsync>) => {
      if (state[action.payload]) {
        state[action.payload]--;
      }
    }
  }
);
