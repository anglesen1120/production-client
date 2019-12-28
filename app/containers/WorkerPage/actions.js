/*
 *
 * WorkerPage actions
 *
 */

import socketIOClient from 'socket.io-client';
import {
  GET_TASK,
  GET_TASK_SUCCESS,
  GET_TASK_ERROR,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_ERROR,
  CHANGE_COUNTDOWN_TIME,
  CHANGE_SCHEDULED_QUANTITY,
  CHANGE_MADE_QUANTITY,
  PAUSE_COUNTDOWN_TIME,
} from './constants';

const socket = socketIOClient('http://localhost:3001/production');

export function getTaskAction() {
  return {
    type: GET_TASK,
  };
}

export function getTaskSuccessAction(task) {
  socket.emit('login', { task });

  return {
    type: GET_TASK_SUCCESS,
    task,
  };
}

export function getTaskErrorAction(error) {
  return {
    type: GET_TASK_ERROR,
    error,
  };
}

export function updateTaskAction() {
  return {
    type: UPDATE_TASK,
  };
}

export function updateTaskSuccessAction(task) {
  socket.emit('login', { task });

  return {
    type: UPDATE_TASK_SUCCESS,
    task,
  };
}

export function updateTaskErrorAction(error) {
  return {
    type: UPDATE_TASK_ERROR,
    error,
  };
}

export function changeScheduledQuantityAction() {
  return {
    type: CHANGE_SCHEDULED_QUANTITY,
  };
}

export function changeMadeQuantityAction() {
  return {
    type: CHANGE_MADE_QUANTITY,
  };
}

export function changeCountdownTimeAction() {
  return {
    type: CHANGE_COUNTDOWN_TIME,
  };
}

export function pauseCountdownTimeAction() {
  return {
    type: PAUSE_COUNTDOWN_TIME,
  };
}
