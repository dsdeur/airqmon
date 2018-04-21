import * as React from 'react';
import { CenteredContent, ContentSpacing as LoaderSummary, CenteredText } from '../parts';
import styled, { IStyleAwareProps, keyframes } from '../styled-components';

const LoaderSpinner = styled.div`
  margin: auto;
  width: 50px;
  height: 40px;
  text-align: center;
`;

const stretchdelay = keyframes`
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
`;

const Spinner = styled.div`
  background-color: ${(props) => props.theme.text.primaryColor};
  height: 100%;
  width: 2px;
  margin: 1px;
  display: inline-block;
  animation: ${stretchdelay} 1.2s infinite ease-in-out;
`;

const Spinner1 = Spinner.extend`
  animation-delay: -1.2s;
`;

const Spinner2 = Spinner.extend`
  animation-delay: -1.1s;
`;

const Spinner3 = Spinner.extend`
  animation-delay: -1s;
`;

const Spinner4 = Spinner.extend`
  animation-delay: -0.9s;
`;

const Spinner5 = Spinner.extend`
  animation-delay: -0.8s;
`;

const Loader: React.SFC<IStyleAwareProps> = () => {
  return (
    <CenteredContent>
      <LoaderSummary>
        <CenteredText>Loading data&hellip;</CenteredText>
        <LoaderSpinner>
          <Spinner1 />
          <Spinner2 />
          <Spinner3 />
          <Spinner4 />
          <Spinner5 />
        </LoaderSpinner>
      </LoaderSummary>
    </CenteredContent>
  );
};

export default Loader;
