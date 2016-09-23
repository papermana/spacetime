import { connect } from 'react-redux';
import Search from 'components/Search';
import { searchActions } from 'actions';

const mapDispatchToProps = (dispatch) => ({
  performSearch(e) {
    dispatch(searchActions.performSearch(e.target.value));
  },
});

export default connect(
  undefined,
  mapDispatchToProps
)(Search);
