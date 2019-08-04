import axios from 'axios';
import { START_API, END_API } from 'state/actions/net';

export const api = store => next => async action => {
  const oldState = store.getState();
  await next(action);
  const newState = store.getState();
  if (action.meta && action.meta.api) {
    const { group, onSuccess, onFailure, ...req } = action.meta.api;
    try {
      store.dispatch({ type: START_API, payload: group });
      const response = await axios(req);
      if (onSuccess) {
        const { data } = response;
        store.dispatch({
          type: onSuccess,
          payload: data,
          meta: { originalPayload: action.payload },
        });
      }
    } catch (error) {
      if (onFailure) {
        const currentState = store.getState();
        store.dispatch({
          type: onFailure,
          payload: { oldState, newState, currentState },
          meta: { originalPayload: action.payload },
          error,
        });
      }
    } finally {
      store.dispatch({ type: END_API, payload: group });
    }
  }
};
