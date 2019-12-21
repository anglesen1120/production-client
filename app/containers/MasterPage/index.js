/**
 *
 * MasterPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectMasterPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  masterPage: makeSelectMasterPage(),
});

function MasterPage() {
  useInjectReducer({ key: 'masterPage', reducer });
  useInjectSaga({ key: 'masterPage', saga });

  /* eslint-disable no-unused-vars */
  const { masterPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>MasterPage</title>
        <meta name="description" content="Description of MasterPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

MasterPage.propTypes = {};

export default MasterPage;
