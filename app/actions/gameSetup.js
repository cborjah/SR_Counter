import { SET_NAMES } from './types';

export function setNames(name1, name2) {
  return {
    type: SET_NAMES,
    payload: [name1 || 'Player 1' , name2 || 'Player 2']
  }
}
