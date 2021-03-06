import { call, put, select, takeLatest } from 'redux-saga/effects';
import { api, request } from 'utils';

import { GET_TASK, UPDATE_TASK } from './constants';
import { makeSelectToken } from '../App/selectors';
import { makeSelectTask } from './selectors';
import {
  getTaskSuccessAction,
  getTaskErrorAction,
  updateTaskSuccessAction,
  updateTaskErrorAction,
} from './actions';

export function* getTask() {
  const { accessToken } = yield select(makeSelectToken());

  try {
    const response = yield call(request, api.task, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    yield put(getTaskSuccessAction(response));
  } catch (error) {
    yield put(getTaskErrorAction(error));
  }
}

export function* updateTask() {
  const { accessToken } = yield select(makeSelectToken());
  const { uuid } = yield select(makeSelectTask());

  try {
    const response = yield call(request, api.task, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uuid }),
    });

    yield put(updateTaskSuccessAction(response));
  } catch (error) {
    yield put(updateTaskErrorAction(error));
  }
}

export default function* workerPageSaga() {
  yield takeLatest(GET_TASK, getTask);
  yield takeLatest(UPDATE_TASK, updateTask);
}
