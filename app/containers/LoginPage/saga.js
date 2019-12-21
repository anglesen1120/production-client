import { call, put, select, takeLatest } from 'redux-saga/effects';
import { api, request } from 'utils';
import { ENTER_LOGIN } from './constants';
import { enterLoginSuccessAction, enterLoginErrorAction } from './actions';
import { makeSelectLogin, makeSelectPassword } from './selectors';

export function* enterLogin() {
  const login = yield select(makeSelectLogin());
  const password = yield select(makeSelectPassword());

  try {
    const token = yield call(request, api.login, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        password,
      }),
    });

    yield put(enterLoginSuccessAction(token));
  } catch (error) {
    yield put(enterLoginErrorAction(error));
  }
}

export default function* loginPageSaga() {
  yield takeLatest(ENTER_LOGIN, enterLogin);
}
