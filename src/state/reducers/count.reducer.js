import validator from '../validators';
import { INCREMENT, DECREMENT } from '../actions/types';

export default validator(
  state => state >= 0 && state <= 5,
  (state = 0, action) => {
    switch (action.type) {
      case INCREMENT:
        const { payload = 1 } = action;
        return state + payload;
      case DECREMENT:
        return state - 1;
      default:
        return state;
    }
  }
);
