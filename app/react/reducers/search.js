import { searchConstants } from 'constants';

export default (state = [], action) => {
  switch (action.type) {
    case searchConstants.performSearch:
      const newState = Object.assign({}, state);

      newState.map((user) => ({
        ...user,
        isSearched: user.name.contains(action.payload),
      }));
    default:
      return state;
  }
}