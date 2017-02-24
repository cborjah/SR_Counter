import { MINUS_TRADE_P1, ADD_TRADE_P1, MINUS_COMBAT_P1, ADD_COMBAT_P1, P1_ATTACKS } from './types';

export function minusTradeP1() {
  return {
    type: MINUS_TRADE_P1
  };
}

export function addTradeP1() {
  return {
    type: ADD_TRADE_P1
  };
}

export function minusCombatP1() {
  return {
    type: MINUS_COMBAT_P1
  };
}

export function addCombatP1() {
  return {
    type: ADD_COMBAT_P1
  };
}

export function p1Attacks(combatPoints) {
  return {
    type: P1_ATTACKS,
    payload: combatPoints
  }
}
