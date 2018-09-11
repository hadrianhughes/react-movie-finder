import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

const Button = ({ text, onClick }) => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
);

export default Button;
