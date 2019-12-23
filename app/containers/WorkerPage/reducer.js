/*
 *
 * WorkerPage reducer
 *
 */

import produce from 'immer';
import { GET_TASK, GET_TASK_SUCCESS, GET_TASK_ERROR } from './constants';

export const initialState = {
  isLoading: false,
  error: '',
  scheduledQuantity: 0,
  madeQuantity: 0,
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
      draft.isLoading = false;
      draft.task = action.task;
      break;
    case GET_TASK_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default workerPageReducer;
