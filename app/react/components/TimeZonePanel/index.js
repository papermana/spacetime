import React, { PropTypes } from 'react';
import Button from 'components/Button';

const TimeZonePanel = (props) => {
  const timeZones = props.timeZonesList.map( t => {
    return (
      <div className="timezone__column">
        <div className="timezone__name">
          {t}
        </div>
      </div>
    )
  });

  return (
    <div className="counter-modifier">
      <h3 className="counter-modifier__title">
        Time zone panel
      </h3>
      <span>{timeZones}</span>
    </div>
  )
}

TimeZonePanel.propTypes = {
  increaseCount: PropTypes.func,
  decreaseCount: PropTypes.func,
};

export default TimeZonePanel;
