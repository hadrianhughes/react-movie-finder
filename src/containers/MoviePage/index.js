import React from 'react';
import PropTypes from 'prop-types';

import MoviePage from '../../components/MoviePage';

class MoviePageContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      title: '',
      poster: '',
      runtime: '',
      genre: '',
      director: '',
      year: '',
      releaseDate: '',
      rating: '',
      plot: '',
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount () {
    this.fetchData();
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) this.fetchData();
  }

  fetchData () {
    fetch(`http://www.omdbapi.com/?apikey=8eff793c&i=${this.props.match.params.id}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          title: response.Title,
          poster: response.Poster,
          runtime: response.Runtime,
          genre: response.Genre,
          director: response.Director,
          year: response.Year,
          releaseDate: response.Released,
          rating: response.imdbRating,
          plot: response.Plot,
        });
      });
  }

  render () {
    const {
      title,
      poster,
      runtime,
      genre,
      director,
      year,
      releaseDate,
      rating,
      plot,
    } = this.state;

    return (
      <MoviePage
        title={title}
        poster={poster}
        runtime={runtime}
        genre={genre}
        director={director}
        year={year}
        releaseDate={releaseDate}
        rating={rating}
        plot={plot}
      />
    );
  }
}

MoviePageContainer.propTypes = {
  match: PropTypes.object,
};

MoviePageContainer.defaultProps = {
  match: {},
};

export default MoviePageContainer;
