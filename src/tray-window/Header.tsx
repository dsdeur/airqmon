import styled, { IStyleAwareProps } from '../styled-components';
import * as React from 'react';

const HeaderTitle: React.SFC<IStyleAwareProps> = (props) => (
  <h1 className={`title ${props.className}`}>{props.children}</h1>
);

const Header: React.SFC<IStyleAwareProps> = (props) => {
  const Title = styled(HeaderTitle)`
    margin-top: 2px;
  `;

  return (
    <header className={`toolbar toolbar-header ${props.className}`}>
      <Title>Airqmon</Title>
    </header>
  );
};

const StyledHeader = styled(Header)`
  box-shadow: none;

  border-top-left-radius: ${(props) => props.theme.border.radius}px;
  border-top-right-radius: ${(props) => props.theme.border.radius}px;
`;

export default StyledHeader;
