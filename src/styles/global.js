import { injectGlobal } from 'styled-components';

import FiraSans from '../fonts/FiraSans-Regular.ttf';

injectGlobal`
  @font-face {
    font-family: 'Fira Sans';
    src: url(${FiraSans});
  }

  body {
    margin: 0;
    padding: 0;
  }
`;
