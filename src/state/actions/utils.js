export const actionCreator = (type, metaFactory) => payload => ({
  type,
  payload,
  meta: metaFactory && metaFactory(payload),
});
