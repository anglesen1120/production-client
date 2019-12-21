/**
 *
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
// import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Layout } from 'components/Layout';
import { Wrapper } from 'components/Wrapper';
import Callout from 'components/Callout';
import LockButton from 'components/LockButton';
import { Button, Card, Elevation, Intent, Switch } from '@blueprintjs/core';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { InputGroupStyled } from 'components/InputGroup';
import { FormGroupStyled } from 'components/FormGroup';
import {
  makeSelectLogin,
  makeSelectPassword,
  makeSelectError,
  makeSelectIsMaster,
  makeSelectIsLoading,
  makeSelectIsShowPassword,
} from './selectors';
import {
  toggleMasterAction,
  enterLoginAction,
  changeLoginAction,
  changePasswordAction,
  enterLoginErrorAction,
} from './actions';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

const key = 'loginPage';
const stateSelector = createStructuredSelector({
  login: makeSelectLogin(),
  password: makeSelectPassword(),
  error: makeSelectError(),
  isMaster: makeSelectIsMaster(),
  isShowPassword: makeSelectIsShowPassword(),
  isLoading: makeSelectIsLoading(),
});

export default function LoginPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { login, error, isMaster, isShowPassword, isLoading } = useSelector(
    stateSelector,
  );
  const dispatch = useDispatch();
  const handleMaster = () => dispatch(toggleMasterAction());
  const handleLogin = e => {
    if (!login)
      dispatch(
        enterLoginErrorAction({
          title: 'Your login cannot be empty',
          description:
            'You have not entered your login. Please enter your employee login in the Login field',
        }),
      );
    else dispatch(enterLoginAction());
    e.preventDefault();
  };
  const onChangeLogin = e => dispatch(changeLoginAction(e.target.value));
  const onChangePassword = e => dispatch(changePasswordAction(e.target.value));

  return (
    <>
      <Helmet>
        <title>Login - production</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>

      <Layout>
        <Wrapper main>
          <Card elevation={Elevation.TWO}>
            <form onSubmit={handleLogin}>
              <FormGroupStyled>
                <InputGroupStyled
                  type="number"
                  large
                  placeholder="Enter login..."
                  onChange={onChangeLogin}
                  disabled={isLoading}
                />
                {isMaster && (
                  <InputGroupStyled
                    type={isShowPassword ? 'text' : 'password'}
                    rightElement={<LockButton />}
                    large
                    placeholder="Enter password..."
                    onChange={onChangePassword}
                    disabled={isLoading}
                  />
                )}

                <Wrapper form="true">
                  <Switch
                    checked={isMaster}
                    onChange={handleMaster}
                    label="Master?"
                    disabled={isLoading}
                  />

                  <Button
                    rightIcon="arrow-right"
                    type="submit"
                    disabled={isLoading}
                  >
                    Log In
                  </Button>
                </Wrapper>
              </FormGroupStyled>
            </form>
          </Card>

          {error.title && error.description && (
            <Callout
              intent={Intent.WARNING}
              title={error.title}
              description={error.description}
            />
          )}
        </Wrapper>
      </Layout>
    </>
  );
}
