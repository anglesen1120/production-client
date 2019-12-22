import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { api, request, roles } from 'utils';
import routes from 'routes';
import jwtDecode from 'jwt-decode';
import { ENTER_LOGIN } from './constants';
import { enterLoginSuccessAction, enterLoginErrorAction } from './actions';
import { makeSelectLogin, makeSelectPassword } from './selectors';

export function* enterLogin() {
  const login = yield select(makeSelectLogin());
  const password = yield select(makeSelectPassword());

  try {
    const response = yield call(request, api.login, {
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

    const {
      token,
      token: { accessToken },
    } = response;
    const { role } = jwtDecode(accessToken);
    yield put(enterLoginSuccessAction(token));

    switch (role) {
      case roles.worker:
        yield put(push(routes.worker));
        break;
      case roles.master:
        yield put(push(routes.master));
        break;
      case roles.admin:
        // todo: create admin page
        break;
    }
  } catch (err) {
    const [title] = [err.message];
    yield put(enterLoginErrorAction({ title, description: 'description' }));
  }
}

export default function* loginPageSaga() {
  yield takeLatest(ENTER_LOGIN, enterLogin);
}
