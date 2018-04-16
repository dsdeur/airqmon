import styled from '../styled-components';

const ContentSpacing = styled.div`
  margin-top: ${(props) => props.theme.spacing};
  padding-left: calc(${(props) => props.theme.spacing} * 2);
  padding-right: calc(${(props) => props.theme.spacing} * 2);
`;

export default ContentSpacing;
