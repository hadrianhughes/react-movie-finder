import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Layout from '../Layout';
import { Back, PosterDiv, Info, Rating, Poster } from './styles';

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
    <PosterDiv>
      <Back to="/">&lt; Back</Back>
      <Poster src={poster} />
    </PosterDiv>
    <Info>
      <h2>{title} ({year})</h2>
      <p>{plot}</p>
      <p><strong>Genre:</strong> &nbsp;{genre}</p>
      <p><strong>Runtime:</strong> &nbsp;{runtime}</p>
      <p><strong>Release date:</strong> &nbsp;{releaseDate}</p>
      <p><strong>Director:</strong> &nbsp;{director}</p>
      <Rating value={Number(rating)}>{rating}</Rating>
    </Info>
  </Layout>
);

export default MoviePage;
