import styled, { IStyleAwareProps } from '../styled-components';
import * as React from 'react';

const WindowHeaderTitle: React.SFC<IStyleAwareProps> = (props) => (
  <h1 className={`title ${props.className}`}>{props.children}</h1>
);

const WindowHeader: React.SFC<IStyleAwareProps> = (props) => {
  const Title = styled(WindowHeaderTitle)`
    margin-top: 2px;
  `;

  return (
    <header className={`toolbar toolbar-header ${props.className}`}>
      <Title>Airqmon</Title>
    </header>
  );
};

const StyledWindowHeader = styled(WindowHeader)`
  box-shadow: none;

  border-top-left-radius: ${(props) => props.theme.border.radius};
  border-top-right-radius: ${(props) => props.theme.border.radius};
`;

export default StyledWindowHeader;
