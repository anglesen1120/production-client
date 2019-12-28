/**
 *
 * WorkerPage
 *
 */

import React, { useEffect } from 'react';
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Spinner,
  Intent,
} from '@blueprintjs/core';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Layout } from 'components/App/Layout';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import Actions from 'components/App/Actions';
import Statistics from 'components/App/Statistics';
import TechnicalDrawing from 'components/App/TechnicalDrawing';
import socketIOClient from 'socket.io-client';
import {
  makeSelectTask,
  makeSelectIsLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getTaskAction, updateTaskAction } from './actions';

const stateSelector = createStructuredSelector({
  task: makeSelectTask(),
  isLoading: makeSelectIsLoading(),
  error: makeSelectError(),
});

export default function WorkerPage() {
  useInjectReducer({ key: 'workerPage', reducer });
  useInjectSaga({ key: 'workerPage', saga });

  const { task, isLoading, error } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const getTask = () => dispatch(getTaskAction());

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <Helmet>
        <title>Worker - production</title>
        <meta name="description" content="Description of WorkerPage" />
      </Helmet>

      <Layout>
        <TechnicalDrawing />
        <Statistics />
      </Layout>

      <Actions />
    </>
  );
}
