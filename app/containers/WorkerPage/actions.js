/*
 *
 * WorkerPage actions
 *
 */

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
} from './constants';

export function getTaskAction() {
  return {
    type: GET_TASK,
  };
}

export function getTaskSuccessAction(task) {
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

export function updateTaskSuccessAction() {
  return {
    type: UPDATE_TASK_SUCCESS,
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
