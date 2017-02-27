import { MINUS_TRADE_P2, ADD_TRADE_P2, MINUS_COMBAT_P2, ADD_COMBAT_P2, P2_ATTACKS } from './types';

export function minusTradeP2() {
  return {
    type: MINUS_TRADE_P2
  };
}

export function addTradeP2() {
  return {
    type: ADD_TRADE_P2
  };
}

export function minusCombatP2() {
  return {
    type: MINUS_COMBAT_P2
  };
}

export function addCombatP2() {
  return {
    type: ADD_COMBAT_P2
  };
}

export function p2Attacks(combatPoints) {
  return {
    type: P2_ATTACKS,
    payload: combatPoints
  }
}
