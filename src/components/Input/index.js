import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, StyledInput } from './styles';

const Input = ({ onChange, placeholder, value }) => (
  <Wrapper>
    <StyledInput
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  </Wrapper>
);

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => {},
  placeholder: '',
  value: '',
};

export default Input;
