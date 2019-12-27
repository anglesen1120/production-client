/**
 *
 * CountdownTimer
 *
 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectInterval,
  makeSelectIsActive,
  makeSelectTask,
} from 'containers/WorkerPage/selectors';
import {
  changeCountdownTimeAction,
  changeScheduledQuantityAction,
  changeMadeQuantityAction,
} from 'containers/WorkerPage/actions';
import { transformSecondsToTimeFormat } from 'services/datetime.service';
import Typography from '../Statistics/Typography.style';
import Item from '../Statistics/Item.style';

const stateSelector = createStructuredSelector({
  interval: makeSelectInterval(),
  isActive: makeSelectIsActive(),
  task: makeSelectTask(),
});

export default function CountdownTimer() {
  const {
    interval,
    isActive,
    task: { status },
  } = useSelector(stateSelector);
  const [seconds, setSeconds] = useState(interval);
  const dispatch = useDispatch();
  const handleTime = () => dispatch(changeCountdownTimeAction());
  const handleScheduledQuantity = () =>
    dispatch(changeScheduledQuantityAction());
  const handleMadeQuantity = () => dispatch(changeMadeQuantityAction());

  useEffect(() => {
    let countdown;

    if (isActive && !status) {
      countdown = setInterval(() => {
        // handleTime();
        setSeconds(duration => duration - 1);
      }, 1000);
      if (seconds === 0) {
        handleScheduledQuantity();
        setSeconds(interval);
      }
    }
    if (status) {
      setSeconds(0);
    }
    return () => clearInterval(countdown);
  }, [seconds, isActive, status]);

  return (
    <>
      {console.log(seconds)}
      <Item>
        <Typography>Czas produkcji</Typography>
        <Typography details>{transformSecondsToTimeFormat(seconds)}</Typography>
      </Item>

      <Item>
        <Typography>Całkowity czas produkcji</Typography>
        <Typography details>{transformSecondsToTimeFormat(seconds)}</Typography>
      </Item>
    </>
  );
}
