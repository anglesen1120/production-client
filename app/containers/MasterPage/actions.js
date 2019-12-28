/*
 *
 * MasterPage actions
 *
 */

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

export function getCustomersAction() {
  return {
    type: GET_CUSTOMERS,
  };
}

export function getCustomersSuccessAction(customers) {
  return {
    type: GET_CUSTOMERS_SUCCESS,
    customers,
  };
}

export function getCustomersErrorAction(error) {
  return {
    type: GET_CUSTOMERS_ERROR,
    error,
  };
}

export function createCustomerAction() {
  return {
    type: CREATE_CUSTOMER,
  };
}

export function createCustomerSuccessAction() {
  return {
    type: CREATE_CUSTOMER_SUCCESS,
  };
}

export function createCustomerErrorAction(error) {
  return {
    type: CREATE_CUSTOMER_ERROR,
    error,
  };
}

export function getProductionMachinesAction() {
  return {
    type: GET_PRODUCTION_MACHINES,
  };
}

export function getProductionMachinesSuccessAction(productionMachines) {
  return {
    type: GET_PRODUCTION_MACHINES_SUCCESS,
    productionMachines,
  };
}

export function getProductionMachinesErrorAction(error) {
  return {
    type: GET_PRODUCTION_MACHINES_ERROR,
    error,
  };
}

export function createProductionMachineAction() {
  return {
    type: CREATE_PRODUCTION_MACHINE,
  };
}

export function createProductionMachineSuccessAction() {
  return {
    type: CREATE_PRODUCTION_MACHINE_SUCCESS,
  };
}

export function createProductionMachineErrorAction(error) {
  return {
    type: CREATE_PRODUCTION_MACHINE_ERROR,
    error,
  };
}

export function getProductionTasksAction() {
  return {
    type: GET_PRODUCTION_TASKS,
  };
}

export function getProductionTasksSuccessAction(productionTasks) {
  return {
    type: GET_PRODUCTION_TASKS_SUCCESS,
    productionTasks,
  };
}

export function getProductionTasksErrorAction(error) {
  return {
    type: GET_PRODUCTION_TASKS_ERROR,
    error,
  };
}

export function createProductionTaskAction() {
  return {
    type: CREATE_PRODUCTION_TASK,
  };
}

export function createProductionTaskSuccessAction() {
  return {
    type: CREATE_PRODUCTION_TASK_SUCCESS,
  };
}

export function createProductionTaskErrorAction(error) {
  return {
    type: CREATE_PRODUCTION_TASK_ERROR,
    error,
  };
}
