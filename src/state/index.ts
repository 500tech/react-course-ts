import { configureStore } from "redux-starter-kit";
import reducer from "./reducers";
import middleware from "./middleware";

export type State = ReturnType<typeof reducer>;

export default configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV === "development"
});
