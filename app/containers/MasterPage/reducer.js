/*
 *
 * MasterPage reducer
 *
 */

import produce from 'immer';
import {
  GET_CUSTOMERS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_ERROR,
  CREATE_CUSTOMER,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_ERROR,
  GET_PRODUCTION_MACHINES,
  GET_PRODUCTION_MACHINES_SUCCESS,
  GET_PRODUCTION_MACHINES_ERROR,
  CREATE_PRODUCTION_MACHINE,
  CREATE_PRODUCTION_MACHINE_SUCCESS,
  CREATE_PRODUCTION_MACHINE_ERROR,
  GET_PRODUCTION_TASKS,
  GET_PRODUCTION_TASKS_SUCCESS,
  GET_PRODUCTION_TASKS_ERROR,
  CREATE_PRODUCTION_TASK,
  CREATE_PRODUCTION_TASK_SUCCESS,
  CREATE_PRODUCTION_TASK_ERROR,
} from './constants';

export const initialState = {
  isLoading: false,
};

/* eslint-disable no-param-reassign */
const masterPageReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
    case GET_PRODUCTION_MACHINES:
    case GET_PRODUCTION_TASKS:
      draft.isLoading = !draft.isLoading;
      break;
  }
}, initialState);

export default masterPageReducer;
