import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpoint, fontSize, color, spacing } from '../../styles/tools';

export const Back = styled(Link)`
  color: ${color('black')};
  display: block;
  font-size: ${fontSize('medium')};
  padding-bottom: ${spacing('small')};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
`;

export const PosterDiv = styled.div`
  @media only screen and (min-width: ${breakpoint('medium')}) {
    box-sizing: border-box;
    display: inline-block;
    padding-right: ${spacing('medium')};
    vertical-align: top;
    width: 40%;
  }
`;

export const Info = styled.div`
  padding-top: ${spacing('medium')};

  @media only screen and (min-width: ${breakpoint('medium')}) {
    display: inline-block;
    vertical-align: top;
    width: 60%;
  }
`;

export const Rating = styled.p`
  color: ${props => (
    props.value > 4 ?
      props.value > 8 ?
      'green'
      :
      'orange'
    :
    'red'
  )}
  font-size: ${fontSize('xlarge')};
  font-weight: bold;
  padding-left: ${spacing('medium')};
`;
