import React from 'react';
import { debounce } from 'throttle-debounce';

import Input from '../../components/Input';
import ResultsList from '../../components/ResultsList';

class Search extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      value: '',
      results: [],
      page: 1,
      hasMoreResults: false,
    };

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

  handleChange (e) {
    this.setState({ value: e.target.value }, () => {
      this.newSearchDebounced();
    });
  }

  newSearch () {
    Search.fetchResults(this.state.value)
      .then((response) => {
        const results = response.Search.filter(item => item.Poster && item.Poster !== 'N/A');
        this.setState(response.Response === 'True' ? {
          results,
          hasMoreResults: this.state.results.length + results.length < response.totalResults,
          page: 1,
        } : {
          results: [],
          hasMoreResults: false,
          page: 1,
        });
      })
      .catch(err => console.error(err));
  }

  loadMore () {
    Search.fetchResults(this.state.value, this.state.page + 1)
      .then((response) => {
        const results = response.Search.filter(item => item.Poster && item.Poster !== 'N/A');
        this.setState(response.Response === 'True' ? {
          results: this.state.results.concat(results),
          hasMoreResults: this.state.results.length + results.length < response.totalResults,
          page: this.state.page + 1,
        } : {
          hasMoreResults: false,
        });
      })
      .catch(err => console.error(err));
  }

  render () {
    return (
      <div>
        <Input
          onChange={this.handleChange}
          placeholder="Search for a movie..."
          value={this.state.value}
        />
        <ResultsList
          items={this.state.results}
          hasMoreResults={this.state.hasMoreResults}
          onLoadMore={this.loadMore}
        />
      </div>
    );
  }
}

export default Search;
