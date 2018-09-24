import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { debounce } from 'throttle-debounce';

import setMovies from '../../actions/setMovies';
import setHasMore from '../../actions/setHasMore';
import setPage from '../../actions/setPage';
import setSearchQuery from '../../actions/setSearchQuery';

import Input from '../../components/Input';
import ResultsList from '../../components/ResultsList';

class Search extends React.Component {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.newSearchDebounced = debounce(500, this.newSearch);
    this.loadMore = this.loadMore.bind(this);
  }

  static fetchResults (term, page) {
    return new Promise ((resolve, reject) => {
      fetch(`http://www.omdbapi.com/?apikey=8eff793c&s=${term}${page ? `&page=${page}` : ''}`)
        .then(response => response.json())
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }

  static trimResults (results) {
    const remainder = results.length % 3;
    return remainder > 0 ? results.slice(0, results.length - remainder) : results;
  }

  handleChange (e) {
    this.props.setSearchQuery(e.target.value);
    this.newSearchDebounced();
  }

  newSearch () {
    Search.fetchResults(this.props.query)
      .then((response) => {
        const results = response.Search.filter(item => item.Poster && item.Poster !== 'N/A');
        this.props.setMovies(response.Response === 'True' ? results : []);
        this.props.setHasMore(
          response.Response === 'True' ? (
            this.props.movies.length + results.length < response.totalResults
          ) : false);
        this.props.setPage(this.props.page + 1);
      })
      .catch(err => console.error(err));
  }

  loadMore () {

    Search.fetchResults(this.props.query, this.props.page + 1)
      .then((response) => {
        const results = response.Search.filter(item => item.Poster && item.Poster !== 'N/A');
        if (response.Response === 'True') {
          this.props.setMovies(this.props.movies.concat(results));
          this.props.setPage(this.props.page + 1);
          this.props.setHasMore(this.props.movies.length + results.length < response.totalResults);
        } else {
          this.props.setHasMore(false);
        }
      })
      .catch(err => console.error(err));
  }

  render () {
    return (
      <div>
        <Input
          onChange={this.handleChange}
          placeholder="Search for a movie..."
          value={this.props.query}
        />
        <ResultsList
          items={Search.trimResults(this.props.movies)}
          hasMoreResults={this.props.hasMoreResults}
          onLoadMore={this.loadMore}
        />
      </div>
    );
  }
}

Search.propTypes = {
  movies: PropTypes.array,
  hasMoreResults: PropTypes.bool,
  page: PropTypes.number,
  query: PropTypes.string,
  setMovies: PropTypes.func,
  setHasMore: PropTypes.func,
  setPage: PropTypes.func,
};

Search.defaultProps = {
  movies: [],
  hasMoreResults: true,
  page: 1,
  query: '',
  setMovies: () => {},
  setHasMore: () => {},
  setPage: () => {},
};

const mapStateToProps = state => ({
  movies: state.setMovies,
  hasMoreResults: state.setHasMore,
  page: state.setPage,
  query: state.setSearchQuery,
});

const mapDispatchToProps = dispatch => ({
  setMovies: movies => dispatch(setMovies(movies)),
  setHasMore: hasMore => dispatch(setHasMore(hasMore)),
  setPage: page => dispatch(setPage(page)),
  setSearchQuery: value => dispatch(setSearchQuery(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
