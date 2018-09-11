import styled from 'styled-components';

import { spacing, color } from '../../styles/tools';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-bottom: ${spacing('large')};
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

export const ItemLink = styled(Link)`
  color: ${color('black')};
  display: block;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledImg = styled.img`
  vertical-align: top;
  width: 100%;
`;
