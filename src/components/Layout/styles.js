import styled from 'styled-components';

import { layoutMaxWidth } from '../../styles/settings';
import { rem } from '../../styles/tools';

export const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: ${rem(layoutMaxWidth)};
`;
