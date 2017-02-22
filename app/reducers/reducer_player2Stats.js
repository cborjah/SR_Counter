import { MINUS_TRADE_P2, ADD_TRADE_P2, MINUS_COMBAT_P2, ADD_COMBAT_P2 } from '../actions/types';

const INITIAL_STATE = {
  authority: 50,
  trade: 0,
  combat: 0
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case MINUS_TRADE_P2:
      if(state.trade > 0) {
        return { ...state, trade: state.trade - 1};
      } else {
        return state;
      }
    case ADD_TRADE_P2:
      return { ...state, trade: state.trade + 1}
    case MINUS_COMBAT_P2:
      if(state.combat > 0) {
        return { ...state, combat: state.combat - 1};
      } else {
        return state;
      }
    case ADD_COMBAT_P2:
      return { ...state, combat: state.combat + 1};
    default:
      return state;
  }
}
