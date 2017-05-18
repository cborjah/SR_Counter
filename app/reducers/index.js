import { combineReducers } from 'redux';
import GameSetupReducer from './reducer_gameSetup';
import Player1Stats from './reducer_player1Stats';
import Player2Stats from './reducer_player2Stats';

const rootReducer = combineReducers({
  playerNames: GameSetupReducer,
  player1Stats: Player1Stats,
  player2Stats: Player2Stats
});

export default rootReducer;
