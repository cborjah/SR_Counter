import { TAB_CHANGED } from '../actions/types';

const INITIAL_STATE = { activeTab: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TAB_CHANGED:
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
}
