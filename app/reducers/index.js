import { combineReducers } from 'redux';
import GameSetupReducer from './reducer_gameSetup';

const rootReducer = combineReducers({
  playerNames: GameSetupReducer
});

export default rootReducer;
