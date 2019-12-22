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
