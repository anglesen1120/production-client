/*
 * Callout Messages
 *
 * This contains all the text for the Callout component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Callout';

export default defineMessages({
  description: {
    id: `${scope}.description`,
    defaultMessage:
      'You have not entered your login. Please enter your employee login in the Login field',
  },
});
