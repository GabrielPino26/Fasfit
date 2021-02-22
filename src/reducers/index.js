import { combineReducers } from 'redux';

import authentication from './authentication';
import wardrobe from './wardrobe';
import world from './world';
import faslance from './faslance';
import notification from './notification';

const rootReducer = combineReducers({
  authentication,
  wardrobe,
  world,
  faslance,
  notification
});


export default rootReducer;
