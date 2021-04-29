import { combineReducers } from 'redux';

import authentication from './authentication';
import wardrobe from './wardrobe';
import world from './world';
import faslance from './faslance';
import notification from './notification';
import profile from './profile';
import folderpost from './folderpost';

const rootReducer = combineReducers({
  authentication,
  wardrobe,
  world,
  faslance,
  notification,
  profile,
  folderpost
});


export default rootReducer;
