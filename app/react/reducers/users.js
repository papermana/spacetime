import { userConstants } from 'constants';
import mockUsers from 'reducers/mock-users';

export default (state = mockUsers(), action) => {
  switch (action.type) {
    case userConstants.CREATE:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};
