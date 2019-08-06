import axios from 'axios';
import { API_START, API_END } from 'state/actions';

export const api = store => next => async action => {
  // this is run after every action
  const preState = store.getState();
  await next(action);
  const postState = store.getState();
  if (action.meta && action.meta.api) {
    const { group, onFailure, onSuccess, ...requestParams } = action.meta.api;
    store.dispatch({ type: API_START, payload: group });
    try {
      const response = await axios(requestParams);
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
          payload: {
            preState,
            postState,
            currentState,
          },
          meta: { originalPayload: action.payload },
          error,
        });
      }
    } finally {
      store.dispatch({ type: API_END, payload: group });
    }
  }
};
