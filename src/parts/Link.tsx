import styled from '../styled-components';

import { textMixin } from '../style-mixins';

const Link = styled.a`
  ${textMixin};
  cursor: pointer;
  font-weight: 400;
  text-decoration: none;

  > * {
    cursor: pointer;
  }
`;

export default Link;
