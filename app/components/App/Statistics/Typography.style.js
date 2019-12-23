/**
 *
 * Typography
 *
 */

import styled from 'styled-components';
import { colors } from 'utils';

export const Typography = styled.div`
  font-size: ${props => (props.details ? '27px' : '19px')};
  color: ${props => props.details && colors.secondaryBlue};
  font-weight: ${props => props.details && '700'};
`;

export default Typography;
