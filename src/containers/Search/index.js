import React from 'react';
import { debounce } from 'throttle-debounce';

import Input from '../../components/Input';

class Search extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      value: '',
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
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  render () {
    return (
      <Input
        onChange={this.handleChange}
        placeholder="Search for a movie..."
        value={this.state.value}
      />
    );
  }
}

export default Search;
