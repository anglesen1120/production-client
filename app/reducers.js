/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { history } from 'utils';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import appReducer from 'containers/App/reducer';
import workerPageReducer from 'containers/WorkerPage/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    app: appReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    workerPage: workerPageReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
