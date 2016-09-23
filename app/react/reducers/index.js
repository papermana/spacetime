import { combineReducers } from 'redux';

import counter from 'reducers/counter';
import users from 'reducers/users';
import timeZone from 'reducers/timeZones';

export default combineReducers({
  counter,
  users,
  timeZone,
});
