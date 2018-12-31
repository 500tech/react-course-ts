// @TODO implement the log action middleware

let i = 0;
export default _store => {
  console.log('store', i++);
  return next => {
    console.log('next', i++);
    return action => {
      console.log('action', i++);
      return next(action);
    }
  }
}