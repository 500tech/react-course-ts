import * as AT from '../action-types';

const initialState = {
  email: 'shay@500tech.com'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.LOGOUT:
      return {
        email: null
      };
    default:
      return state;
  }
};

export default rootReducer;
