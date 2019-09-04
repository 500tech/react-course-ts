import axios from 'axios';

export const api = store => next => async action => {
  next(action);
  if (action.meta && action.meta.api) {
    const { onFailure, onSuccess, ...reqParams } = action.meta.api;
    try {
      const resp = await axios(reqParams);
      if (onSuccess) {
        const { data } = resp;
        store.dispatch({ type: onSuccess, payload: data });
      }
    } catch (err) {
      if (onFailure) {
        store.dispatch({ type: onFailure, error: err });
      }
    }
  }
};
