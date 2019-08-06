import axios from 'axios';

export const api = store => next => async action => {
  // this is run after every action
  const preState = store.getState();
  await next(action);
  const postState = store.getState();
  if (action.meta && action.meta.api) {
    const { onFailure, onSuccess, ...requestParams } = action.meta.api;
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
    }
  }
};
