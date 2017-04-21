import { SET_NAMES } from './types';

export function setNames(name1, name2) {
  return {
    type: SET_NAMES,
    payload: [name1 || 'PLAYER 1' , name2 || 'PLAYER 2']
  }
}
