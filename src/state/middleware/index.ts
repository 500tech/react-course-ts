import reduxLogger from "redux-logger";
import { apiMiddleware } from "./api";
export default [apiMiddleware, reduxLogger];
