import { SET_TRADE_P1 } from './types';

export function setTradeP1(trade) {
  return {
    type: SET_TRADE_P1,
    payload: trade
  }
}
