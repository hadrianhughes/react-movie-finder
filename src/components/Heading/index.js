import React from 'react';
import PropTypes from 'prop-types';

import { H1 } from './styles';

const Heading = ({ children }) => (
  <H1>{ children }</H1>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
