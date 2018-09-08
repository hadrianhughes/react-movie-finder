import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../Heading';
import { StyledLayout } from './styles';

const Layout = ({ children }) => (
  <StyledLayout>
    <Heading>Movie Finder</Heading>
    { children }
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
