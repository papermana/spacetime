import React, { PropTypes } from 'react';
import Button from 'components/Button';

const TimeZonePanel = () => (
  <div className="counter-modifier">
    <h3 className="counter-modifier__title">
      Time zone panel
    </h3>
  </div>
);

TimeZonePanel.propTypes = {
  increaseCount: PropTypes.func,
  decreaseCount: PropTypes.func,
};

export default TimeZonePanel;
