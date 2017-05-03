import {
  MINUS_TRADE_P1,
  ADD_TRADE_P1,
  MINUS_COMBAT_P1,
  ADD_COMBAT_P1,
  MINUS_AUTHORITY_P1,
  ADD_AUTHORITY_P1,
  MINUS_DEFENSE_P1,
  ADD_DEFENSE_P1,
  P2_ATTACKS,
  P1_ATTACKS,
  NEW_GAME
} from '../actions/types';

const INITIAL_STATE = {
  authority: 50,
  trade: 0,
  combat: 0,
  defense: 0,
  history: []
}

export default function(state = INITIAL_STATE, action) {
  const updatedHistory = state.history.slice();
  const lastItem = updatedHistory[updatedHistory.length - 1];

  switch(action.type) {
    case MINUS_TRADE_P1:
      if(state.trade > 0) {
        if(lastItem && lastItem.type === 'trade' && lastItem.operator === '-') {
          lastItem.val += 1;
          return { ...state, trade: state.trade - 1, history: updatedHistory };
        } else {
          updatedHistory.push({ val: 1, operator: '-', type: 'trade', backgroundColor: "#f4d719" });
          return { ...state, trade: state.trade - 1, history: updatedHistory };
        }
      } else {
        return state;
      }
    case ADD_TRADE_P1:
      if(lastItem && lastItem.type === 'trade' && lastItem.operator === '+') {
        if(state.trade < 99) {
          lastItem.val += 1;
          return { ...state, trade: state.trade + 1, history: updatedHistory };
        }
        return state;
      } else {
        updatedHistory.push({ val: 1, operator: '+', type: 'trade', backgroundColor: "#f4d719" });
        return { ...state, trade: state.trade + 1, history: updatedHistory };
      }
      // return { ...state, trade: state.trade + 1 }
    case MINUS_COMBAT_P1:
      if(state.combat > 0) {
        if(lastItem && lastItem.type === 'combat' && lastItem.operator === '-') {
          lastItem.val += 1;
          return { ...state, combat: state.combat - 1, history: updatedHistory };
        } else {
          updatedHistory.push({ val: 1, operator: '-', type: 'combat', backgroundColor: "#d34314" });
          return { ...state, combat: state.combat - 1, history: updatedHistory };
        }
      } else {
        return state;
      }
    case ADD_COMBAT_P1:
      if(lastItem && lastItem.type === 'combat' && lastItem.operator === '+' && state.trade < 100) {
        if(state.combat < 99) {
          lastItem.val += 1;
          return { ...state, combat: state.combat + 1, history: updatedHistory };
        }
        return state;
      } else {
        updatedHistory.push({ val: 1, operator: '+', type: 'combat', backgroundColor: "#d34314" });
        return { ...state, combat: state.combat + 1, history: updatedHistory };
      }
    case MINUS_AUTHORITY_P1: {
      if(lastItem && lastItem.type === 'authority' && lastItem.operator === '-') {
        lastItem.val += 1;
        return { ...state, authority: state.authority - 1, history: updatedHistory };
      } else {
        updatedHistory.push({ val: 1, operator: '-', type: 'authority', backgroundColor: "#6bef81" });
        return { ...state, authority: state.authority - 1, history: updatedHistory };
      }
    }
    case ADD_AUTHORITY_P1: {
      if(lastItem && lastItem.type === 'authority' && lastItem.operator === '+') {
        if(state.authority < 99) {
          lastItem.val += 1;
          return { ...state, authority: state.authority + 1, history: updatedHistory };
        }
        return state;
      } else {
        updatedHistory.push({ val: 1, operator: '+', type: 'authority', backgroundColor: "#6bef81" });
        return { ...state, authority: state.authority + 1, history: updatedHistory };
      }
    }
    case MINUS_DEFENSE_P1: {
      if(state.defense > 0) {
        if(lastItem && lastItem.type === 'defense' && lastItem.operator === '-') {
          lastItem.val += 1;
          return { ...state, defense: state.defense - 1, history: updatedHistory };
        } else {
          updatedHistory.push({ val: 1, operator: '-', type: 'defense', backgroundColor: "#070d18", color: '#FFF', borderWidth: 1, borderColor: '#FFF' });
          return { ...state, defense: state.defense - 1, history: updatedHistory };
        }
      } else {
        return state;
      }
    }
    case ADD_DEFENSE_P1: {
      if(lastItem && lastItem.type === 'defense' && lastItem.operator === '+') {
        if(state.defense < 99) {
          lastItem.val += 1;
          return { ...state, defense: state.defense + 1, history: updatedHistory };
        }
        return state;
      } else {
        updatedHistory.push({ val: 1, operator: '+', type: 'defense', backgroundColor: "#070d18", color: '#FFF', borderWidth: 1, borderColor: '#FFF' });
        return { ...state, defense: state.defense + 1, history: updatedHistory };
      }
    }
    case P2_ATTACKS:
      // return { ...state, authority: state.authority - action.payload };
      if(action.payload >= state.defense) {
        action.payload -= state.defense;
        state.defense = 0;
        return { ...state, authority: state.authority - action.payload, history: [] };
      } else {
        return { ...state, history: [] };
      }
    case P1_ATTACKS:
      return { ...state, trade: 0, combat: 0 };
    case NEW_GAME:
      return { ...state, authority: 50, trade: 0, combat: 0, defense: 0, history: [] };
    default:
      return state;
  }
}
