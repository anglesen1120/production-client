import { put, takeLatest } from 'redux-saga/effects';
import loginPageSaga, { enterLogin } from '../saga';
import { ENTER_LOGIN } from '../constants';
import { enterLoginSuccessAction, enterLoginErrorAction } from '../actions';

const login = 'test';
const password = 'test2';

describe('enterLogin Saga', () => {
  let enterLoginGenerator;

  beforeEach(() => {
    enterLoginGenerator = enterLogin();

    const selectDescriptor = enterLoginGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = enterLoginGenerator.next(login, password).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the enterLoginSuccessAction action if it requests the data successfully', () => {
    const response = { token: { token: 'test' } };
    const putDescriptor = enterLoginGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(enterLoginSuccessAction(response)));
  });

  it('should call the enterLoginErrorAction action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = enterLoginGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(enterLoginErrorAction(response)));
  });
});

describe('loginPageSaga Saga', () => {
  const loginPage = loginPageSaga();

  it('should start task to watch for ENTER_LOGIN action', () => {
    const takeLatestDescriptor = loginPage.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(ENTER_LOGIN, loginPage));
  });
});
