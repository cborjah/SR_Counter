import {
  MINUS_TRADE_P2,
  ADD_TRADE_P2,
  MINUS_COMBAT_P2,
  ADD_COMBAT_P2,
  MINUS_AUTHORITY_P2,
  ADD_AUTHORITY_P2,
  MINUS_DEFENSE_P2,
  ADD_DEFENSE_P2,
  P1_ATTACKS,
  P2_ATTACKS,
  NEW_GAME
} from '../actions/types';

const INITIAL_STATE = {
  authority: 50,
  trade: 0,
  combat: 0,
  defense: 0
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case MINUS_TRADE_P2:
      if(state.trade > 0) {
        return { ...state, trade: state.trade - 1 };
      } else {
        return state;
      }
    case ADD_TRADE_P2:
      return { ...state, trade: state.trade + 1 }
    case MINUS_COMBAT_P2:
      if(state.combat > 0) {
        return { ...state, combat: state.combat - 1 };
      } else {
        return state;
      }
    case ADD_COMBAT_P2:
      return { ...state, combat: state.combat + 1 };
    case MINUS_AUTHORITY_P2: {
      return { ...state, authority: state.authority - 1 };
    }
    case ADD_AUTHORITY_P2: {
      return { ...state, authority: state.authority + 1 };
    }
    case MINUS_DEFENSE_P2: {
      if(state.defense > 0) {
        return { ...state, defense: state.defense - 1 };
      } else {
        return state;
      }
    }
    case ADD_DEFENSE_P2: {
      return { ...state, defense: state.defense + 1 };
    }
    case P1_ATTACKS:
      // return { ...state, authority: state.authority - action.payload };
      if(action.payload >= state.defense) {
        action.payload -= state.defense;
        state.defense = 0;
        return { ...state, authority: state.authority - action.payload };
      } else {
        return state;
      }
    case P2_ATTACKS:
      return { ...state, trade: 0, combat: 0 };
    case NEW_GAME:
      return { ...state, authority: 50, trade: 0, combat: 0};
    default:
      return state;
  }
}
