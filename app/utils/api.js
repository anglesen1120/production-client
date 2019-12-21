/**
 * api.js
 *
 * swagger: https://production.pietrzakadrian.com/documentation/
 */

export const API_URL = 'https://production.pietrzakadrian.com/api';
export const AUTH = '/auth';
export const USERS = '/users';
export const CUSTOMERS = '/customers';
export const PRODUCTION = '/production';

export default {
  login: `${API_URL}${AUTH}/login`,
  register: `${API_URL}${AUTH}/register`,
  logout: `${API_URL}${AUTH}/logout`,
  users: `${API_URL}${USERS}`,
  customers: `${API_URL}${CUSTOMERS}`,
  machines: `${API_URL}${PRODUCTION}/machines`,
  tasks: `${API_URL}${PRODUCTION}/tasks`,
  task: `${API_URL}${PRODUCTION}/task`,
};
