import { get } from 'lodash';
import { NET_FAILURE, NET_SUCCESS } from '../utils';

export default store => next => async action => {
  next(action);
  const api = get(action, 'meta.api');
  if (api) {
    const {
      url,
      method = 'GET',
      body,
      headers = {},
      successAction = NET_SUCCESS,
      failureAction = NET_FAILURE,
    } = api;
    const fetchOptions = {
      method,
    };
    if (body !== undefined) {
      headers['Content-Type'] = 'application/json';
      fetchOptions.body = JSON.stringify(body);
    }
    fetchOptions.headers = headers;
    try {
      const response = await fetch(url, fetchOptions);
      if (!response.ok) {
        throw await response.json();
      }
      store.dispatch({
        type: successAction,
        payload: await response.json(),
        originalPayload: action.payload,
      });
    } catch (e) {
      store.dispatch({
        type: failureAction,
        payload: e,
        originalPayload: action.payload,
      });
    }
  }
};
