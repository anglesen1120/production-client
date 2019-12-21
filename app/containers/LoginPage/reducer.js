/*
 *
 * LoginPage reducer
 *
 */

import produce from 'immer';
import {
  CHANGE_LOGIN,
  CHANGE_PASSWORD,
  TOGGLE_MASTER,
  TOGGLE_PASSWORD,
  ENTER_LOGIN,
  ENTER_LOGIN_SUCCESS,
  ENTER_LOGIN_ERROR,
} from './constants';

export const initialState = {
  login: '',
  password: '',
  error: '',
  isMaster: false,
  isLoading: false,
  isShowPassword: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      draft.login = parseInt(action.login, 10);
      draft.error = initialState.error;
      break;
    case CHANGE_PASSWORD:
      draft.password = action.password;
      draft.error = '';
      break;
    case TOGGLE_MASTER:
      draft.isMaster = !draft.isMaster;
      break;
    case TOGGLE_PASSWORD:
      draft.isShowPassword = !draft.isShowPassword;
      break;
    case ENTER_LOGIN:
      draft.isLoading = true;
      break;
    case ENTER_LOGIN_SUCCESS:
      draft.isLoading = false;
      draft.login = initialState.login;
      draft.password = initialState.password;
      draft.isMaster = initialState.isMaster;
      break;
    case ENTER_LOGIN_ERROR:
      draft.error = action.error;
      draft.isLoading = false;
      break;
  }
}, initialState);

export default loginPageReducer;
