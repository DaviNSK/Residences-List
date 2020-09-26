import { combineReducers } from 'redux';

import residences from './residences/reducer';
import states from './states/reducer';

export default combineReducers({
  residences,
  states
});
