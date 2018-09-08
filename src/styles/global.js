import { injectGlobal } from 'styled-components';

import './normalize.css';
import { baseFontSize } from './settings';

import FiraSans from '../fonts/FiraSans-Regular.ttf';

injectGlobal`
  @font-face {
    font-family: 'Fira Sans';
    src: url(${FiraSans});
  }

  body {
    font-family: 'Fira Sans';
    font-size: ${baseFontSize}px;
    margin: 0;
    padding: 0;
  }
`;
