/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { loadState, saveState } from 'services/persist.service';
import { throttle } from 'lodash';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'utils';
import 'sanitize.css/sanitize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
// import 'file-loader?name=.htaccess!./.htaccess';
/* eslint-enable import/no-unresolved */

import { HelmetProvider } from 'react-helmet-async';
import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Create redux store with history
const initialState = loadState();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

// Load and Save redux store to localStorage
store.subscribe(
  throttle(() => {
    saveState({
      language: store.getState().language,
      app: store.getState().app,
      workerPage: store.getState().workerPage,
    });
  }, 1000),
);

const ConnectedApp = props => (
  <Provider store={store}>
    <LanguageProvider messages={props.messages}>
      <ConnectedRouter history={history}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ConnectedRouter>
    </LanguageProvider>
  </Provider>
);

ConnectedApp.propTypes = {
  messages: PropTypes.object,
};

const render = messages => {
  ReactDOM.render(<ConnectedApp messages={messages} />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}
