/**
 *
 * Container
 *
 */

import styled from 'styled-components';
import { colors } from 'utils';

export const Wrapper = styled.div`
  padding: 10px;
  background-color: ${colors.secondaryBlue};

  &:hover {
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export default Wrapper;
