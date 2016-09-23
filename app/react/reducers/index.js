import { combineReducers } from 'redux';

import counter from 'reducers/counter';
import users from 'reducers/users';
import search from 'reducers/search';

export default combineReducers({
  counter,
  users,
  search,
});
