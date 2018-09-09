import styled from 'styled-components';

import { rem, fontSize, spacing, color } from '../../styles/tools';

export const Wrapper = styled.div`
  padding: ${spacing('small')};
  padding-bottom: ${spacing('medium')};
`;

export const StyledInput = styled.input`
  border: 1px solid ${color('greyBorder')};
  border-radius: ${rem(10)};
  box-sizing: border-box;
  font-size: ${fontSize('medium')};
  padding: ${spacing('medium')};
  width: 100%;
`;
