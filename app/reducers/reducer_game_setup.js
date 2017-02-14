import { ENTER_NAME_1, ENTER_NAME_2 } from '../actions/types';

const INITIAL_STATE = { name1: '', name2: '' };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ENTER_NAME_1:
      return { ...state, name1: action.payload };
    case ENTER_NAME_2:
      return { ...state, name2: action.payload };
    default:
      return state;
  }
}
