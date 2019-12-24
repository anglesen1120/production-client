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
  const updateTask = () => dispatch(updateTaskAction());

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
      </div>
      <div>
        <Wrapper>
          <Icon icon="log-out" iconSize={75} />
        </Wrapper>
      </div>
    </Container>
  );
}
