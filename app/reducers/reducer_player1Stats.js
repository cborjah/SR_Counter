import { MINUS_TRADE_P1, ADD_TRADE_P1 } from '../actions/types';

const INITIAL_STATE = {
  authority: 50,
  trade: 0,
  combat: 0
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case MINUS_TRADE_P1:
      if(state.trade > 0) {
        return { ...state, trade: state.trade - 1};
      } else {
        return state;
      }
    case ADD_TRADE_P1:
      return { ...state, trade: state.trade + 1}
    default:
      return state;
  }
}
