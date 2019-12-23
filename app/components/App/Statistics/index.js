/**
 *
 * Statistics
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import {
  makeSelectTask,
  makeSelectIsLoading,
  makeSelectError,
} from 'containers/WorkerPage/selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import messages from './messages';
import Container from './Container.style';
import Wrapper from './Wrapper.style';
import Typography from './Typography.style';
import Item from './Item.style';
import CountdownTimer from '../CountdownTimer';

const stateSelector = createStructuredSelector({
  task: makeSelectTask(),
  isLoading: makeSelectIsLoading(),
  error: makeSelectError(),
});

export default function Statistics() {
  const { task, isLoading, error } = useSelector(stateSelector);
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <Item>
          <Typography>Oczekiwana ilość</Typography>
          <Typography details>33</Typography>
        </Item>

        <Item>
          <Typography>Aktualna ilość</Typography>
          <Typography details>49</Typography>
        </Item>
      </Wrapper>

      <Item>
        <Typography>734/ {task.quantityPlanned}</Typography>
      </Item>

      <Item>
        <CountdownTimer />
      </Item>

      <Item>
        <div>Nazwa zadania: {task.name}</div>
        <div>
          Zaplanowane przez: {task.master.firstName} {task.master.lastName}
        </div>
        <div>Nazwa maszyny: {task.productionMachine.name}</div>
        <div>Nazwa klienta: {task.customer.name}</div>
        <div>Data utworzenia: {task.createdAt}</div>
        <div>Numer zadania: {task.uuid}</div>
      </Item>
    </Container>
  );
}
