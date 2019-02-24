export const createAction = type => (payload, meta, error) => ({
  type,
  payload,
  meta,
  error,
});