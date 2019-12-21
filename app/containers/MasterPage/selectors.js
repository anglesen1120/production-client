import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the masterPage state domain
 */

const selectMasterPageDomain = state => state.masterPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MasterPage
 */

const makeSelectMasterPage = () =>
  createSelector(selectMasterPageDomain, substate => substate);

export default makeSelectMasterPage;
export { selectMasterPageDomain };
