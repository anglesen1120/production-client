import { enterLoginAction } from '../actions';
import { ENTER_LOGIN } from '../constants';

describe('LoginPage actions', () => {
  describe('enterLoginAction', () => {
    it('has a type of ENTER_LOGIN', () => {
      const expected = {
        type: ENTER_LOGIN,
      };
      expect(enterLoginAction()).toEqual(expected);
    });
  });
});
