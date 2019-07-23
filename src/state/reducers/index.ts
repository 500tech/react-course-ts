import { combineReducers } from "redux";
import { theme } from "./theme";
import { todos } from "./todos";

export default combineReducers({
  theme,
  todos
});
