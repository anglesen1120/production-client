/*
 *
 * App reducer
 *
 */

import produce from 'immer';
import { ENTER_LOGIN_SUCCESS } from 'containers/LoginPage/constants';

export const initialState = {
  token: {
    expiresIn: 0,
    accessToken: '',
  },
};

/* eslint-disable no-param-reassign */
const appReducer = produce((draft, action) => {
  switch (action.type) {
    case ENTER_LOGIN_SUCCESS:
      draft.token = action.token;
      break;
  }
}, initialState);

export default appReducer;
