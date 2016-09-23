import { timeZoneConstants } from 'constants';

export default (state = [], action) => {
  switch (action.type) {
    case timeZoneConstants.ADD_TIME_ZONE:
      return [...state, action.payload.name,]
    default:
      return state;
  }
};
