/*
 * Callout Messages
 *
 * This contains all the text for the Callout component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Callout';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Callout component!',
  },
});
