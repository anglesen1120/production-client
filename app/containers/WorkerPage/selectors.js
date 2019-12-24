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

const makeSelectTask = () =>
  createSelector(selectWorkerPageDomain, workerState => workerState.task);

const makeSelectIsLoading = () =>
  createSelector(selectWorkerPageDomain, workerState => workerState.isLoading);

const makeSelectIsActive = () =>
  createSelector(selectWorkerPageDomain, workerState => workerState.isActive);

const makeSelectError = () =>
  createSelector(selectWorkerPageDomain, workerState => workerState.error);

const makeSelectInterval = () =>
  createSelector(selectWorkerPageDomain, workerState => workerState.interval);

const makeSelectQuantityScheduled = () =>
  createSelector(
    selectWorkerPageDomain,
    workerState => workerState.quantityScheduled,
  );

export {
  makeSelectTask,
  makeSelectError,
  makeSelectIsLoading,
  makeSelectIsActive,
  makeSelectInterval,
  makeSelectQuantityScheduled,
};
