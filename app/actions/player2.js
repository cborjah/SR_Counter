import {
  MINUS_TRADE_P2,
  ADD_TRADE_P2,
  MINUS_COMBAT_P2,
  ADD_COMBAT_P2,
  P2_ATTACKS,
  ADD_AUTHORITY_P2,
  MINUS_AUTHORITY_P2,
  ADD_DEFENSE_P2,
  MINUS_DEFENSE_P2
} from './types';

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

export function addAuthorityP2() {
  return {
    type: ADD_AUTHORITY_P2
  };
}

export function minusAuthorityP2() {
  return {
    type: MINUS_AUTHORITY_P2
  };
}

export function addDefenseP2() {
  return {
    type: ADD_DEFENSE_P2
  };
}

export function minusDefenseP2() {
  return {
    type: MINUS_DEFENSE_P2
  };
}

export function p2Attacks(combatPoints) {
  return {
    type: P2_ATTACKS,
    payload: combatPoints
  }
}
