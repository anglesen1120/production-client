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
} from '@blueprintjs/core';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Layout } from 'components/Layout';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import {
  makeSelectTask,
  makeSelectIsLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getTaskAction, updateTaskAction } from './actions';
import Statistics from '../../components/App/Statistics';

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
  const updateTask = () => dispatch(updateTaskAction());

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <Helmet>
        <title>Worker - production</title>
        <meta name="description" content="Description of WorkerPage" />
      </Helmet>

      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Production</NavbarHeading>
          <NavbarDivider />
        </NavbarGroup>

        <NavbarGroup align={Alignment.RIGHT}>
          <NavbarDivider />
          <Button
            className={Classes.MINIMAL}
            onClick={updateTask}
            icon="log-out"
            text="Logout"
          />
        </NavbarGroup>
      </Navbar>

      <div>
        <div>img</div>
        <Statistics />
      </div>
    </>
  );
}
