import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { counterActions } from 'actions';

import TimeZonePanel from 'components/TimeZonePanel';

const mapStateToProps = state => ({
  timeZonesList: state.timeZones,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeZonePanel);
