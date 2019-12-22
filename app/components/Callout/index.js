/**
 *
 * Callout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Intent } from '@blueprintjs/core';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import CalloutStyled from './Callout.style';

export default function Callout({ title, description }) {
  return (
    <CalloutStyled intent={Intent.WARNING} title={title}>
      <div>{description}</div>
    </CalloutStyled>
  );
}

Callout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
