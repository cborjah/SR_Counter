import { SET_NAMES } from '../actions/types';

const INITIAL_STATE = { name1: '', name2: '' };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_NAMES:
      return { ...state, name1: action.payload[0], name2: action.payload[1] };
    default:
      return state;
  }
}
