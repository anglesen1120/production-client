import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the workerPage state domain
 */

const selectWorkerPageDomain = state => state.workerPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by WorkerPage
 */

const makeSelectWorkerPage = () =>
  createSelector(selectWorkerPageDomain, substate => substate);

export default makeSelectWorkerPage;
export { selectWorkerPageDomain };
