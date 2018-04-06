import styled from '../styled-components';

import { textMixin } from '../style-mixins';

export const Text = styled.div`
  ${textMixin};
  text-align: left;
`;

export const CenteredText = Text.extend`
  text-align: center;
`;
