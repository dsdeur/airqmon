import styled from '../styled-components';

export const Text = styled.div`
  text-align: 'left';
  font-size: ${(props) => props.theme.text.primarySize};
  color: ${(props) => props.theme.text.primaryColor};
  font-weight: 300;
`;

export const CenteredText = styled(Text)`
  text-align: center;
`;
