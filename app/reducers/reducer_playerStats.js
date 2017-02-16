const INITIAL_STATE = {
  p1: {
    authority: 50,
    trade: 0,
    combat: 0
  },
  p2: {
    authority: 50,
    trade: 0,
    combat: 0
  }
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    default:
      return state;
  }
}
