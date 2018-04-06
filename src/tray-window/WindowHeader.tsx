import styled, { IStyleAwareProps } from '../styled-components';
import * as React from 'react';

const WindowHeader: React.SFC<IStyleAwareProps> = (props) => {
  return (
    <header className={`toolbar toolbar-header ${props.className}`}>
      <h1 className="title" style={{ marginTop: '2px' }}>
        Airqmon
      </h1>
    </header>
  );
};

const StyledWindowHeader = styled(WindowHeader)`
  box-shadow: none;

  border-top-left-radius: ${(props) => props.theme.border.radius};
  border-top-right-radius: ${(props) => props.theme.border.radius};
`;

export default StyledWindowHeader;
