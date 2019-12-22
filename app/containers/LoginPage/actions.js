/*
 *
 * LoginPage actions
 *
 */

import {
  CHANGE_LOGIN,
  CHANGE_PASSWORD,
  TOGGLE_MASTER,
  TOGGLE_PASSWORD,
  ENTER_LOGIN,
  ENTER_LOGIN_SUCCESS,
  ENTER_LOGIN_ERROR,
} from './constants';

export function changeLoginAction(login) {
  return {
    type: CHANGE_LOGIN,
    login,
  };
}

export function changePasswordAction(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

export function toggleMasterAction() {
  return {
    type: TOGGLE_MASTER,
  };
}

export function togglePasswordAction() {
  return {
    type: TOGGLE_PASSWORD,
  };
}

export function enterLoginAction() {
  return {
    type: ENTER_LOGIN,
  };
}

export function enterLoginSuccessAction(token) {
  return {
    type: ENTER_LOGIN_SUCCESS,
    token,
  };
}

export function enterLoginErrorAction(error) {
  return {
    type: ENTER_LOGIN_ERROR,
    error,
  };
}
