import { css } from './styled-components';

export const textMixin = css`
  font-size: ${(props) => props.theme.text.primarySize};
  color: ${(props) => props.theme.text.primaryColor};
  font-weight: 300;
`;
