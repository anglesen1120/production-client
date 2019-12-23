/**
 *
 * CountdownTimer
 *
 */

import React, { useState, useEffect } from 'react';
import { Hotkey, Hotkeys, HotkeysTarget } from '@blueprintjs/core';
import { useDispatch } from 'react-redux';
import Typography from '../Statistics/Typography.style';
import {
  changeCountdownTimeAction,
  changeScheduledQuantityAction,
  changeMadeQuantityAction,
} from '../../../containers/WorkerPage/actions';

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(4);
  const [quantity, setQuantity] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const dispatch = useDispatch();
  const handleTime = () => dispatch(changeCountdownTimeAction());
  const handleScheduledQuantity = () =>
    dispatch(changeScheduledQuantityAction());
  const handleMadeQuantity = () => dispatch(changeMadeQuantityAction());

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        handleTime();
        setSeconds(seconds => seconds - 1);
      }, 1000);
      if (seconds === 0) {
        handleScheduledQuantity();
        setSeconds(4);
        setQuantity(quantity + 1);
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
      <Typography>Czas produkcji</Typography>
      <div>{quantity}</div>
      <Typography details>
        {`${Math.floor(seconds / 60)}:${`0${Math.floor(seconds % 60)}`.slice(
          -2,
        )}`}
      </Typography>
    </>
  );
}
