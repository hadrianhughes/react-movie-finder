import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global';

import Heading from './components/Heading';

ReactDOM.render((
  <React.Fragment>
    <Heading>Movie Finder</Heading>
  </React.Fragment>
), document.getElementById('root'));
