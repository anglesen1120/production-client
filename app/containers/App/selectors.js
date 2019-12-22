import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.app || initialState;

const selectRouter = state => state.router;

const makeSelectToken = () =>
  createSelector(selectGlobal, globalState => globalState.token);

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState => routerState.location);

export { makeSelectToken, makeSelectLocation };
