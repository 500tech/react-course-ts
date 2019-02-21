import { countReducer } from './count.reducer';
import { clicksReducer } from './clicks.reducer';

export default function mainReducer(state = {}, action) {
  return {
    count: countReducer(state.count, action),
    clicks: clicksReducer(state.clicks, action),
  };
}
