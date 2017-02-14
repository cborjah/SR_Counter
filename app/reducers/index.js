import { combineReducers } from 'redux';
import GameSetupReducer from './reducer_game_setup';

const rootReducer = combineReducers({
  playerNames: GameSetupReducer
});

export default rootReducer;
