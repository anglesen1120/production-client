/**
 *
 * Container
 *
 */

import styled from 'styled-components';
import { colors } from 'utils';

export const Wrapper = styled.div`
  margin: 5px;
  padding: 10px;
  background-color: ${colors.secondaryBlue};

  &:hover {
    cursor: pointer;
  }
`;

export default Wrapper;
