/**
 *
 * Typography
 *
 */

import styled from 'styled-components';
import { colors } from 'utils';

export const Typography = styled.div`
  font-size: ${props =>
    (props.details && '40px') || (props.small && '18px') || '25px'};
  color: ${props => props.details && colors.secondaryBlue};
  font-weight: ${props => props.details && '700'};
  margin-bottom: ${props => props.small && '5px'};
`;

export default Typography;
