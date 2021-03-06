/**
 *
 * Actions
 *
 */

import React from 'react';
import { H5, Icon, Intent, Label, Slider } from '@blueprintjs/core';

import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import {
  pauseCountdownTimeAction,
  updateTaskAction,
} from 'containers/WorkerPage/actions';
import { makeSelectIsActive } from 'containers/WorkerPage/selectors';
import { createStructuredSelector } from 'reselect';
import { logoutAction } from 'containers/App/actions';
import socketIOClient from 'socket.io-client';
import messages from './messages';
import Container from './Container.style';
import Wrapper from './Wrapper.style';

const stateSelector = createStructuredSelector({
  isActive: makeSelectIsActive(),
});

export default function Actions() {
  const dispatch = useDispatch();
  const { isActive } = useSelector(stateSelector);

  const handlePause = () => dispatch(pauseCountdownTimeAction());
  const updateTask = () => isActive && dispatch(updateTaskAction());

  const handleLogout = () => dispatch(logoutAction());

  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <Wrapper>
          <Icon
            onClick={handlePause}
            icon={`${isActive ? 'pause' : 'play'}`}
            iconSize={75}
          />
        </Wrapper>

        <Wrapper>
          <Icon onClick={updateTask} icon="key-enter" iconSize={75} />
        </Wrapper>

        <Wrapper>
          <Icon icon="image-rotate-left" iconSize={75} />
        </Wrapper>

        <Wrapper>
          <Icon icon="image-rotate-right" iconSize={75} />
        </Wrapper>

        <Wrapper>
          <Icon icon="zoom-in" iconSize={75} />
        </Wrapper>

        <Wrapper>
          <Icon icon="zoom-out" iconSize={75} />
        </Wrapper>

        <Wrapper>
          <Icon icon="zoom-to-fit" iconSize={75} />
        </Wrapper>
      </div>
      <div>
        <Wrapper>
          <Icon onClick={handleLogout} icon="log-out" iconSize={75} />
        </Wrapper>
      </div>
    </Container>
  );
}
