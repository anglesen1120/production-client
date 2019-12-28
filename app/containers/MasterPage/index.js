/**
 *
 * MasterPage
 *
 */

import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import socketIOClient from 'socket.io-client';

import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
  Tab,
  TabId,
  Tabs,
} from '@blueprintjs/core';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectMasterPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const socket = socketIOClient('http://localhost:3001/production');
const stateSelector = createStructuredSelector({
  masterPage: makeSelectMasterPage(),
});

export default function MasterPage() {
  const [inRoom, setInRoom] = useState(false);
  useInjectReducer({ key: 'masterPage', reducer });
  useInjectSaga({ key: 'masterPage', saga });

  useEffect(() => {
    socket.on('users', message => {
      console.log(message);
    });
  }, []);

  /* eslint-disable no-unused-vars */
  const { masterPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  const handleRoom = () => {
    setInRoom(!inRoom);
    console.log(inRoom);
  };

  return (
    <>
      <Helmet>
        <title>Master - production</title>
        <meta name="description" content="Description of MasterPage" />
      </Helmet>

      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Production Application 1.0</NavbarHeading>
          <NavbarDivider />
          <Button
            onClick={handleRoom}
            className={Classes.MINIMAL}
            icon="application"
            text="Production"
          />

          <Button className={Classes.MINIMAL} icon="layers" text="Tasks" />
          <Button className={Classes.MINIMAL} icon="wrench" text="Machines" />
          <Button className={Classes.MINIMAL} icon="people" text="Customers" />
        </NavbarGroup>

        <NavbarGroup align={Alignment.RIGHT}>
          <NavbarDivider />
          <Button className={Classes.MINIMAL} icon="log-out" text="Log out" />
        </NavbarGroup>
      </Navbar>
    </>
  );
}
