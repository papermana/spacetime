import { timeZoneConstants } from 'constants';
const initialState = ['Asia/Tokyo', 'Australia/Sydney', 'America/Los_Angeles', 'America/New_York']

export default (state = initialState, action) => {
  switch (action.type) {
    case timeZoneConstants.ADD_TIME_ZONE:
      return [...state, action.payload.name,]
    default:
      return state;
  }
};
