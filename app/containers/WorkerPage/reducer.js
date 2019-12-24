/*
 *
 * WorkerPage reducer
 *
 */

import produce from 'immer';
import {
  GET_TASK,
  GET_TASK_SUCCESS,
  GET_TASK_ERROR,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_ERROR,
  CHANGE_SCHEDULED_QUANTITY,
  PAUSE_COUNTDOWN_TIME,
} from './constants';

export const initialState = {
  isLoading: false,
  isActive: true,
  error: '',
  quantityScheduled: 0,
  interval: null,
  task: {
    name: '',
    quantityPlanned: 0,
    quantityMade: 0,
    technicalDrawing: '',
    status: false,
    duration: '',
    createdAt: '',
    customer: {
      name: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      tax: '',
      createdAt: '',
    },
    user: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      createdAt: '',
      lastLogin: '',
      lastLogout: '',
    },
    master: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      createdAt: '',
      lastLogin: '',
      lastLogout: '',
    },
    productionMachine: {
      name: '',
    },
  },
};

/* eslint-disable no-param-reassign */
const workerPageReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_TASK:
      draft.isLoading = true;
      break;
    case GET_TASK_SUCCESS:
    case UPDATE_TASK_SUCCESS:
      draft.isLoading = false;
      draft.task = action.task;
      draft.interval =
        action.task.duration
          .split(':')
          .reverse()
          .reduce((prev, curr, i) => prev + curr * 60 ** i, 0) /
        action.task.quantityPlanned;
      break;
    case GET_TASK_ERROR:
    case UPDATE_TASK_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
    case CHANGE_SCHEDULED_QUANTITY:
      draft.quantityScheduled += 1;
      break;
    case PAUSE_COUNTDOWN_TIME:
      draft.isActive = !draft.isActive;
      break;
  }
}, initialState);

export default workerPageReducer;
