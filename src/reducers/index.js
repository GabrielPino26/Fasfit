import { combineReducers } from 'redux';

import authentication from './authentication';
import wardrobe from './wardrobe';
import world from './world';
import faslance from './faslance';
import notification from './notification';
import profile from './profile';
import folderpost from './folderpost';
import question from './question';

const rootReducer = combineReducers({
  authentication,
  wardrobe,
  world,
  faslance,
  notification,
  profile,
  folderpost,
  question
});


export default rootReducer;
