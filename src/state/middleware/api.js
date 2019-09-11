import axios from 'axios';

export const api = store => next => async action => {
  next(action);
  if (action.meta && action.meta.api) {
    const { onSuccess, onFailure, ...request } = action.meta.api;
    try {
      const response = await axios(request);
      if (onSuccess) {
        store.dispatch({
          type: onSuccess,
          payload: response.data,
          meta: {
            originalPayload: action.payload,
          },
        });
      }
    } catch (error) {
      if (onFailure) {
        store.dispatch({
          type: onFailure,
          meta: {
            originalPayload: action.payload,
          },
          error,
        });
      }
    }
  }
};
