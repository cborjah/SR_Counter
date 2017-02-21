import { MINUS_TRADE_P1, ADD_TRADE_P1 } from './types';

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
