/**
 *
 * LockButton
 *
 */

import React from 'react';
import { Button, Intent, Tooltip } from '@blueprintjs/core';

import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectIsShowPassword,
  makeSelectIsLoading,
} from 'containers/LoginPage/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { togglePasswordAction } from 'containers/LoginPage/actions';
import messages from './messages';

const stateSelector = createStructuredSelector({
  isShowPassword: makeSelectIsShowPassword(),
  isLoading: makeSelectIsLoading(),
});

export default function LockButton() {
  const { isShowPassword, isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handlePassword = () => dispatch(togglePasswordAction());

  return (
    <Tooltip
      content={`${isShowPassword ? 'Hide' : 'Show'} Password`}
      disabled={isLoading}
    >
      <Button
        disabled={isLoading}
        icon={isShowPassword ? 'unlock' : 'lock'}
        intent={Intent.WARNING}
        minimal
        onClick={handlePassword}
      />
    </Tooltip>
  );
}
