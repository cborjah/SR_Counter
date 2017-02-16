import { combineReducers } from 'redux';
import GameSetupReducer from './reducer_gameSetup';
import PlayerStats from './reducer_playerStats';

const rootReducer = combineReducers({
  playerNames: GameSetupReducer,
  playerStats: PlayerStats
});

export default rootReducer;
