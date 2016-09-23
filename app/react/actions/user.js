import { userConstants } from '../constants';
import { createAction } from 'redux-actions';

export const createUser = createAction(
  userConstants.CREATE,
  user => user
);
