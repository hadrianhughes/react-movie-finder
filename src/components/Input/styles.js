import styled from 'styled-components';

import { colors } from '../../styles/settings';
import { rem, fontSize, spacing } from '../../styles/tools';

export const Wrapper = styled.div`
  padding: ${spacing('small')};
`;

export const StyledInput = styled.input`
  border: 1px solid ${colors['greyBorder']};
  border-radius: ${rem(10)};
  box-sizing: border-box;
  font-size: ${fontSize('medium')};
  padding: ${spacing('medium')};
  width: 100%;
`;
