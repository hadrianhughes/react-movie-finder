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
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchResultsDebounced = debounce(500, this.fetchResults);
  }

  handleChange (e) {
    this.setState({ value: e.target.value }, () => {
      this.fetchResultsDebounced();
    });
  }

  fetchResults () {
    fetch(`http://www.omdbapi.com/?apikey=8eff793c&s=${this.state.value}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          results: response.Response === 'True' ?
            response.Search.filter(item => item.Poster && item.Poster !== 'N/A')
            :
            []
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
        <ResultsList items={this.state.results} />
      </div>
    );
  }
}

export default Search;
