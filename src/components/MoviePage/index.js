import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';

const MoviePage = ({
  title,
  poster,
  runtime,
  genre,
  director,
  year,
  releaseDate,
  rating,
  plot
}) => (
  <Layout>
    <h2>{title}</h2>
  </Layout>
);

export default MoviePage;
