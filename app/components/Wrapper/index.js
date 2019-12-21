/**
 *
 * Wrapper
 *
 */

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${props => (props.main ? 'block' : 'flex')};
  justify-content: space-between;
  align-items: center;
  margin: ${props => (props.form ? '10px 0' : '10px')};
  width: 100%;
  max-width: 400px;
`;

export default Wrapper;
