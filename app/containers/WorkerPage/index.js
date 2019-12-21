/**
 *
 * WorkerPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectWorkerPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  workerPage: makeSelectWorkerPage(),
});

function WorkerPage() {
  useInjectReducer({ key: 'workerPage', reducer });
  useInjectSaga({ key: 'workerPage', saga });

  /* eslint-disable no-unused-vars */
  const { workerPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>WorkerPage</title>
        <meta name="description" content="Description of WorkerPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

WorkerPage.propTypes = {};

export default WorkerPage;
