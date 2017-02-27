import { MINUS_TRADE_P1, ADD_TRADE_P1, MINUS_COMBAT_P1, ADD_COMBAT_P1, P2_ATTACKS, P1_ATTACKS } from '../actions/types';

const INITIAL_STATE = {
  authority: 50,
  trade: 0,
  combat: 0
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case MINUS_TRADE_P1:
      if(state.trade > 0) {
        return { ...state, trade: state.trade - 1 };
      } else {
        return state;
      }
    case ADD_TRADE_P1:
      return { ...state, trade: state.trade + 1 }
    case MINUS_COMBAT_P1:
      if(state.combat > 0) {
        return { ...state, combat: state.combat - 1 };
      } else {
        return state;
      }
    case ADD_COMBAT_P1:
      return { ...state, combat: state.combat + 1 };
    case P2_ATTACKS:
      return { ...state, authority: state.authority - action.payload };
    case P1_ATTACKS: {
      return { ...state, combat: 0 };
    }
    default:
      return state;
  }
}
