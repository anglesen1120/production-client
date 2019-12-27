import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { api, request } from 'utils';
import routes from 'routes';
import { LOGOUT } from './constants';
import { logoutSuccessAction, logoutErrorAction } from './actions';
import { makeSelectToken } from './selectors';

export function* logout() {
  const { accessToken } = yield select(makeSelectToken());

  try {
    yield call(request, api.logout, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    yield put(logoutSuccessAction());
    yield put(push(routes.login));
  } catch (error) {
    yield put(logoutErrorAction(error));
  }
}

export default function* appSaga() {
  yield takeLatest(LOGOUT, logout);
}
