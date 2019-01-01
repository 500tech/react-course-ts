export const NET_SUCCESS = 'NET_SUCCESS';
export const NET_FAILURE = 'NET_FAILURE';

export const createAction = (type, api) => payload => {
  const action = { type, payload };
  if (api) {
    action.api = typeof api === 'function' ? api(payload) : api;
  }
  return action;
};
