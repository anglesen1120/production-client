/**
 *
 * CountdownTimer
 *
 */

import React, { useState, useEffect } from 'react';
import { Hotkey, Hotkeys, HotkeysTarget } from '@blueprintjs/core';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectInterval,
  makeSelectQuantityScheduled,
  makeSelectIsActive,
} from 'containers/WorkerPage/selectors';
import {
  changeCountdownTimeAction,
  changeScheduledQuantityAction,
  changeMadeQuantityAction,
  pauseCountdownTimeAction,
} from 'containers/WorkerPage/actions';
import { transformSecondsToTimeFormat } from 'services/datetime.service';
import Typography from '../Statistics/Typography.style';
import Item from '../Statistics/Item.style';

const stateSelector = createStructuredSelector({
  interval: makeSelectInterval(),
  isActive: makeSelectIsActive(),
  quantityScheduled: makeSelectQuantityScheduled(),
});

export default function CountdownTimer() {
  const { interval, isActive } = useSelector(stateSelector);
  const [seconds, setSeconds] = useState(interval);
  const dispatch = useDispatch();
  const handleTime = () => dispatch(changeCountdownTimeAction());
  const handleScheduledQuantity = () =>
    dispatch(changeScheduledQuantityAction());
  const handleMadeQuantity = () => dispatch(changeMadeQuantityAction());

  useEffect(() => {
    let countdown;

    if (isActive) {
      countdown = setInterval(() => {
        // handleTime();
        setSeconds(duration => duration - 1);
      }, 1000);
      if (seconds === 0) {
        handleScheduledQuantity();
        setSeconds(interval);
      }
    }
    return () => clearInterval(countdown);
  }, [seconds, isActive]);

  return (
    <Item>
      <Typography>Czas produkcji</Typography>
      <Typography details>{transformSecondsToTimeFormat(seconds)}</Typography>
    </Item>
  );
}
