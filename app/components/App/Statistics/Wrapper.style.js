/**
 *
 * Wrapper
 *
 */

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: ${props => props.main && '100%'};
  flex-direction: ${props => props.main && 'column'};
`;

export default Wrapper;
