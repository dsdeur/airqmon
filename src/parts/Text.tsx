import styled from '../styled-components';

import { textMixin } from '../style-mixins';

const Text = styled.div`
  ${textMixin};
  text-align: left;
`;

Text.displayName = 'Text';

const CenteredText = Text.extend`
  text-align: center;
`;

CenteredText.displayName = 'CenteredText';

export { Text, CenteredText };
