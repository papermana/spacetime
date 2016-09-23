import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { counterActions } from 'actions';

import TimeZonePanel from 'components/TimeZonePanel';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  deleteUser(user) {
    dispatch(userActions.deleteUser(user));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeZonePanel);
