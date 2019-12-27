/**
 *
 * Layout
 *
 */

import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${props => props.global && 'column'};
  justify-content: ${props => props.global && 'space-between'};
  height: ${props => props.global && '100vh'};
  padding: ${props => props.global && '10px'};
  margin-bottom: ${props => (props.global ? '0' : '10px')};
`;

export default Layout;
