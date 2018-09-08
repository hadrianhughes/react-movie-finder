import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, StyledInput } from './styles';

const Input = ({ onChange, placeholder }) => (
  <Wrapper>
    <StyledInput type="text" onChange={onChange} placeholder={placeholder} />
  </Wrapper>
);

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => {},
  placeholder: '',
};

export default Input;
