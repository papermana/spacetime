import { searchConstants } from 'constants';
import { createActions } from 'redux-actions';

export const performSearch = createActions(
  searchConstants.PERFORM_SEARCH,
  value => value
);
