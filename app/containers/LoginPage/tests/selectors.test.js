import selectLoginPageDomain, {
  makeSelectLogin,
  makeSelectPassword,
  makeSelectError,
  makeSelectIsLoading,
  makeSelectIsMaster,
  makeSelectIsShowPassword,
} from '../selectors';

describe('selectLoginPageDomain', () => {
  it('should select the loginPage state', () => {
    const loginPageState = {
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
    const mockedState = {
      loginPage: loginPageState,
    };
    expect(selectLoginPageDomain(mockedState)).toEqual(loginPageState);
  });
});

describe('makeSelectLogin', () => {
  const loginSelector = makeSelectLogin();
  it('should select the login', () => {
    const login = 'a';
    const mockedState = {
      loginPage: {
        login,
      },
    };
    expect(loginSelector(mockedState)).toEqual(login);
  });
});

describe('makeSelectPassword', () => {
  const passwordSelector = makeSelectPassword();
  it('should select the password', () => {
    const password = 'a';
    const mockedState = {
      loginPage: {
        password,
      },
    };
    expect(passwordSelector(mockedState)).toEqual(password);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = { title: 'test', description: 'test' };
    const mockedState = {
      loginPage: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectIsLoading', () => {
  const isLoadingSelector = makeSelectIsLoading();
  it('should select the error', () => {
    const isLoading = true;
    const mockedState = {
      loginPage: {
        isLoading,
      },
    };
    expect(isLoadingSelector(mockedState)).toEqual(isLoading);
  });
});

describe('makeSelectIsMaster', () => {
  const isMasterSelector = makeSelectIsMaster();
  it('should select the error', () => {
    const isMaster = true;
    const mockedState = {
      loginPage: {
        isMaster,
      },
    };
    expect(isMasterSelector(mockedState)).toEqual(isMaster);
  });
});

describe('makeSelectIsShowPassword', () => {
  const isShowPasswordSelector = makeSelectIsShowPassword();
  it('should select the error', () => {
    const isShowPassword = true;
    const mockedState = {
      loginPage: {
        isShowPassword,
      },
    };
    expect(isShowPasswordSelector(mockedState)).toEqual(isShowPassword);
  });
});
