import { configureStore } from "redux-starter-kit";
import reducer from "./reducers";

export type State = ReturnType<typeof reducer>;

export default configureStore({
  reducer
});
