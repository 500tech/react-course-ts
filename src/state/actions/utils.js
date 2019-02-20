export const createAction = type => {
  const ctor = (payload, meta, error) => ({
    type,
    payload,
    meta,
    error,
  });
  ctor.toString = () => type;
  return ctor;
}
