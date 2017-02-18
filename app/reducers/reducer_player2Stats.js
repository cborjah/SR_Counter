import { SET_TRADE_P2 } from '../actions/types';

const INITIAL_STATE = {
  authority: 50,
  trade: 0,
  combat: 0
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_TRADE_P2:
    return { ...state, trade: action.payload };
    default:
      return state;
  }
}
