import React from 'react';
import momentTimezone from 'moment-timezone';

const Clock = (props) => {
  const time = momentTimezone.tz(currentTime, timezone);
  const className = props.className
    ? `clock ${props.className}`
    : 'clock';

  return (
    <div className={className} >
      {time.format('hh:mm a')}
    </div>
  );
}

Clock.propTypes = {
  currentTime: React.PropTypes.string.isRequired,
  timezone: React.PropTypes.string,
  className: React.PropTypes.string,
};

export default Clock;
