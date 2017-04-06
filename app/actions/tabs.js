import { TAB_CHANGED } from './types';

export function tabChanged(page) {
  return {
    type: TAB_CHANGED,
    payload: page
  };
}
