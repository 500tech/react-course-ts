import axios from 'axios';

export const api = store => next => async action => {
  const oldState = store.getState();
  next(action);
  const newState = store.getState();
  if (action.meta && action.meta.api) {
    const { api } = action.meta;
    const { onSuccess, onFailure, ...axiosParams } = api;
    try {
      const response = await axios(axiosParams);
      const { data: payload } = response;
      if (onSuccess) {
        store.dispatch(onSuccess(payload));
      }
    } catch (err) {
      if (onFailure) {
        store.dispatch(onFailure(err, oldState, newState));
      }
    }
  }
};
