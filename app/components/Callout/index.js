/**
 *
 * Callout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Intent } from '@blueprintjs/core';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CalloutStyled from './Callout.style';

export default function Callout({ title }) {
  return (
    <CalloutStyled intent={Intent.WARNING} title={title}>
      <div>
        You have not entered your login. Please enter your employee login in the
        Login field
      </div>
    </CalloutStyled>
  );
}

Callout.propTypes = {
  title: PropTypes.string,
};
