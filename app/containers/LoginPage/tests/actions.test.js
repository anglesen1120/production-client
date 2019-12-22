import {
  changeLoginAction,
  changePasswordAction,
  toggleMasterAction,
  togglePasswordAction,
  enterLoginAction,
  enterLoginSuccessAction,
  enterLoginErrorAction,
} from '../actions';
import {
  CHANGE_LOGIN,
  CHANGE_PASSWORD,
  TOGGLE_MASTER,
  TOGGLE_PASSWORD,
  ENTER_LOGIN,
  ENTER_LOGIN_SUCCESS,
  ENTER_LOGIN_ERROR,
} from '../constants';

describe('LoginPage actions', () => {
  describe('changeLoginAction', () => {
    it('should return the correct type and the passed login', () => {
      const login = 'test';
      const expectedResult = {
        type: CHANGE_LOGIN,
        login,
      };

      expect(changeLoginAction(login)).toEqual(expectedResult);
    });
  });

  describe('changePasswordAction', () => {
    it('should return the correct type and the passed password', () => {
      const password = 'test';
      const expectedResult = {
        type: CHANGE_PASSWORD,
        password,
      };

      expect(changePasswordAction(password)).toEqual(expectedResult);
    });
  });

  describe('toggleMasterAction', () => {
    it('has a type of TOGGLE_MASTER', () => {
      const expected = {
        type: TOGGLE_MASTER,
      };
      expect(toggleMasterAction()).toEqual(expected);
    });
  });

  describe('togglePasswordAction', () => {
    it('has a type of TOGGLE_PASSWORD', () => {
      const expected = {
        type: TOGGLE_PASSWORD,
      };
      expect(togglePasswordAction()).toEqual(expected);
    });
  });

  describe('enterLoginAction', () => {
    it('has a type of ENTER_LOGIN', () => {
      const expected = {
        type: ENTER_LOGIN,
      };
      expect(enterLoginAction()).toEqual(expected);
    });
  });

  describe('enterLoginSuccessAction', () => {
    it('has a type of ENTER_LOGIN_SUCCESS', () => {
      const token = { token };
      const expectedResult = {
        type: ENTER_LOGIN_SUCCESS,
        token,
      };

      expect(enterLoginSuccessAction(token)).toEqual(expectedResult);
    });
  });

  describe('enterLoginErrorAction', () => {
    it('has a type of ENTER_LOGIN_ERROR', () => {
      const error = { title: 'test', description: 'test' };
      const expectedResult = {
        type: ENTER_LOGIN_ERROR,
        error,
      };

      expect(enterLoginErrorAction(error)).toEqual(expectedResult);
    });
  });
});
