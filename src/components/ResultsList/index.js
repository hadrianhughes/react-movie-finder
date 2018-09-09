import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Item, StyledImg } from './styles';

const ResultsList = ({ items }) => (
  <Wrapper>
    {
      items.map(item => (
        <Item key={item.imdbID}>
          <StyledImg src={item.Poster} alt={item.Title} />
          <h3>{item.Title} ({item.Year})</h3>
        </Item>
      ))
    }
  </Wrapper>
);

ResultsList.propTypes = {
  items: PropTypes.array,
};

ResultsList.defaultProps = {
  items: [],
};

export default ResultsList;
