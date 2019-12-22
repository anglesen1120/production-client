import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectLogin = () =>
  createSelector(selectLoginPageDomain, loginState => loginState.login);

const makeSelectPassword = () =>
  createSelector(selectLoginPageDomain, loginState => loginState.password);

const makeSelectError = () =>
  createSelector(selectLoginPageDomain, loginState => loginState.error);

const makeSelectIsLoading = () =>
  createSelector(selectLoginPageDomain, loginState => loginState.isLoading);

const makeSelectIsMaster = () =>
  createSelector(selectLoginPageDomain, loginState => loginState.isMaster);

const makeSelectIsShowPassword = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.isShowPassword,
  );

export default selectLoginPageDomain;
export {
  makeSelectLogin,
  makeSelectPassword,
  makeSelectError,
  makeSelectIsLoading,
  makeSelectIsMaster,
  makeSelectIsShowPassword,
};
