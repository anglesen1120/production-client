/**
 *
 * InputGroup
 *
 */

import styled from 'styled-components';
import { InputGroup } from '@blueprintjs/core';

export const InputGroupStyled = styled(InputGroup)`
  margin: 5px 0;

  input {
    min-width: 260px;

    &[type='number'] {
      -moz-appearance: textfield;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export default InputGroupStyled;
