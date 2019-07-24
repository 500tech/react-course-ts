import { combineReducers } from "redux";
import { theme } from "./theme";
import { todos } from "./todos";
import { loading } from "./loading";

export default combineReducers({
  theme,
  todos,
  loading
});
