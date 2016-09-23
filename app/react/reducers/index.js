import { combineReducers } from 'redux';

import counter from 'reducers/counter';
import users from 'reducers/users';
import timeZones from 'reducers/timeZones';

export default combineReducers({
  counter,
  users,
  timeZones,
});
