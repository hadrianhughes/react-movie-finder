import styled from 'styled-components';

import { color, spacing, rem } from '../../styles/tools';

export const StyledButton = styled.button`
  background: ${color('primary')};
  border: 0;
  border-radius: ${rem(5)};
  cursor: pointer;
  display: block;
  margin: 0 auto;
  padding: ${spacing('medium')} ${spacing('large')};
  position: relative;

  &::before {
    background: ${color('primary--dark')};
    border-radius: ${rem(5)};
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: ${rem(5)};
    width: 100%;
    z-index: -1;
  }

  &:hover {
    background: ${color('primary--semiDark')};
  }
`;
