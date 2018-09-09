import styled from 'styled-components';
import { spacing, color, rem } from '../../styles/tools';

export const Wrapper = styled.div`
  padding: 0 ${spacing('small')};

  &::after {
    clear: both;
    content: '';
    display: table;
  }
`;

export const Item = styled.div`
  box-sizing: border-box;
  display: inline-block;
  padding: 0 ${spacing('small')} ${spacing('small')};
  vertical-align: top;
  width: 33.3333%;
`;

export const StyledImg = styled.img`
  vertical-align: top;
  width: 100%;
`;

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
