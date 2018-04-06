import styled, { IStyleAwareProps } from '../styled-components';

import * as React from 'react';

import Link from '../parts/Link';

interface IUpdateAlertProps extends IStyleAwareProps {
  onClickHandler: () => void;
}

const UpdateAlert: React.SFC<IUpdateAlertProps> = (props) => {
  return (
    <div className={props.className}>
      <Link
        style={{ fontSize: props.theme.text.smallSize }}
        href="#"
        onClick={props.onClickHandler}
      >
        <strong>Heads up!</strong> A new version is available for download.
      </Link>
    </div>
  );
};

const StyledUpdateAlert = styled(UpdateAlert)`
  margin-top: 0px;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: #dff0d8;
`;

export default StyledUpdateAlert;
