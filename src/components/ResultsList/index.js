import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Item, StyledImg, ItemLink as Link } from './styles';
import Button from '../Button';

const ResultsList = ({ items, hasMoreResults, onLoadMore }) => (
  <Wrapper>
    <div>
      {
        items.map(item => (
          <Item key={item.imdbID}>
            <Link to={`/movie/${item.imdbID}`}>
              <StyledImg src={item.Poster} alt={item.Title} />
              <h3>{item.Title} ({item.Year})</h3>
            </Link>
          </Item>
        ))
      }
    </div>
    {
      hasMoreResults && <Button text="Load more" onClick={onLoadMore} />
    }
  </Wrapper>
);

ResultsList.propTypes = {
  items: PropTypes.array,
  hasMoreResults: PropTypes.bool,
  onLoadMore: PropTypes.func,
};

ResultsList.defaultProps = {
  items: [],
  hasMoreResults: false,
  onLoadMore: () => {},
};

export default ResultsList;
