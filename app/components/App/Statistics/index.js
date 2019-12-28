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
  makeSelectQuantityScheduled,
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
  quantityScheduled: makeSelectQuantityScheduled(),
});

export default function Statistics() {
  const { task, isLoading, quantityScheduled } = useSelector(stateSelector);

  return (
    <Container className={isLoading && 'bp3-skeleton'}>
      {!isLoading && (
        <Wrapper main>
          <Wrapper>
            <Item>
              <Typography>Oczekiwana ilość</Typography>
              <Typography details>{quantityScheduled}</Typography>
            </Item>

            <Item>
              <Typography>Aktualna ilość</Typography>
              <Typography details>{task.quantityMade}</Typography>
            </Item>
          </Wrapper>

          <Item>
            <Typography>
              {task.quantityMade} / {task.quantityPlanned}
            </Typography>
          </Item>

          <Item>
            <CountdownTimer />
          </Item>

          <Item>
            <Typography small>Nazwa zadania: {task.name}</Typography>
            <Typography small>
              Nazwa maszyny: {task.productionMachine.name}
            </Typography>
            <Typography small>Nazwa klienta: {task.customer.name}</Typography>
            <Typography small>
              Data utworzenia:{' '}
              {task.createdAt &&
                format(new Date(task.createdAt), 'dd.MM.yyyy, HH:MM')}
            </Typography>
            <Typography small>
              Zaplanowane przez: {task.master.firstName} {task.master.lastName}
            </Typography>
            <Typography small>Numer zadania: {task.uuid}</Typography>
          </Item>
        </Wrapper>
      )}
    </Container>
  );
}
