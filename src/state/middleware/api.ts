import { Middleware } from "redux";
import axios from "axios";
import { APIAction } from "../actions/utils";

export const apiMiddleware: Middleware = store => next => async action => {
  const stateBeforeChange = store.getState();
  next(action);
  const stateAfterChange = store.getState();
  if (action.meta && action.meta.api) {
    // here goes the API code
    let label = action.meta.api as APIAction["meta"]["api"];
    if (typeof label === "function") {
      label = label(action.payload);
    }
    const { onSuccess, onFailure, ...axiosConfig } = label;
    try {
      const response = await axios(axiosConfig);
      const { data } = response;
      if (onSuccess) {
        store.dispatch({
          type: onSuccess,
          payload: data,
          meta: {
            originalPayload: action.payload
          }
        });
      }
    } catch (err) {
      if (onFailure) {
        const stateNow = store.getState();
        store.dispatch({
          type: onFailure,
          payload: {
            stateBeforeChange,
            stateAfterChange,
            stateNow
          },
          meta: {
            originalPayload: action.payload
          },
          error: err
        });
      }
    }
  }
};
