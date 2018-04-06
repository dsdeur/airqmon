import styled, { IStyleAwareProps } from '../styled-components';
import * as React from 'react';

const Title: React.SFC<IStyleAwareProps> = (props) => (
  <h1 className={`title ${props.className}`}>{props.children}</h1>
);

const StyledTitle = styled(Title)`
  margin-top: 2px;
`;

const Header: React.SFC<IStyleAwareProps> = (props) => {
  return (
    <header className={`toolbar toolbar-header ${props.className}`}>
      <StyledTitle>Airqmon</StyledTitle>
    </header>
  );
};

const StyledHeader = styled(Header)`
  box-shadow: none;

  border-top-left-radius: ${(props) => props.theme.border.radius}px;
  border-top-right-radius: ${(props) => props.theme.border.radius}px;
`;

export default StyledHeader;
