import { userConstants } from '../constants';
import { createActions } from 'redux-actions';

export const createUser = createActions(
  userConstants.CREATE,
  user => user
);
