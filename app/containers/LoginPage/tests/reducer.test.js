import produce from 'immer';
import loginPageReducer from '../reducer';
import {
  changeLoginAction,
  changePasswordAction,
  toggleMasterAction,
  togglePasswordAction,
  enterLoginAction,
  enterLoginSuccessAction,
  enterLoginErrorAction,
} from '../actions';

/* eslint-disable no-param-reassign */
describe('loginPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      login: '',
      password: '',
      error: {
        title: '',
        description: '',
      },
      isMaster: false,
      isLoading: false,
      isShowPassword: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(loginPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeLoginAction action correctly', () => {
    const login = '123';
    const expectedResult = produce(state, draft => {
      draft.login = parseInt(login, 10);
    });

    expect(loginPageReducer(state, changeLoginAction(login))).toEqual(
      expectedResult,
    );
  });

  it('should handle the changePasswordAction action correctly', () => {
    const password = 'a';
    const expectedResult = produce(state, draft => {
      draft.password = password;
    });

    expect(loginPageReducer(state, changePasswordAction(password))).toEqual(
      expectedResult,
    );
  });

  it('should handle the toggleMasterAction action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isMaster = !draft.isMaster;
    });

    expect(loginPageReducer(state, toggleMasterAction())).toEqual(
      expectedResult,
    );
  });

  it('should handle the togglePasswordAction action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isShowPassword = !draft.isShowPassword;
    });

    expect(loginPageReducer(state, togglePasswordAction())).toEqual(
      expectedResult,
    );
  });

  it('should handle the enterLoginAction action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isLoading = true;
    });

    expect(loginPageReducer(state, enterLoginAction())).toEqual(expectedResult);
  });

  it('should handle the enterLoginSuccessAction action correctly', () => {
    const token = { token: 'tet' };
    const expectedResult = produce(state, draft => {
      draft.isLoading = false;
      draft.login = state.login;
      draft.password = state.password;
      draft.isMaster = state.isMaster;
    });

    expect(loginPageReducer(state, enterLoginSuccessAction(token))).toEqual(
      expectedResult,
    );
  });

  it('should handle the enterLoginErrorAction action correctly', () => {
    const token = { token: 'tet' };
    const expectedResult = produce(state, draft => {
      draft.error = state.error;
      draft.isLoading = false;
    });

    expect(loginPageReducer(state, enterLoginErrorAction(token))).toEqual(
      expectedResult,
    );
  });
});
