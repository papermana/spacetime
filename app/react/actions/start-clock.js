import thunk from 'redux-thunk';
import moment from 'moment-timezone';
import { createActions } from 'redux-actions';
import { clockConstants } from 'constants';

const updateTime = createActions(
  clockConstants.UPDATE_TIME,
  time => time.toISOString(),
);

export default const startClock = () => {
  return (dispatch, getState) => {
    const increaseTime = (time) => {
      return moment(time).add(1, 'm');
    };
    const intervalFunc = () => {
      dispatch(updateTime(increaseTime(getState.time())));
    };

    dispatch(updateTime(moment()));
    setInterval(
      intervalFunc,
      1000 * 60
    );
  };
};
