import * as React from 'react';
import { Link } from '../parts';
import styled, { IStyleAwareProps } from '../styled-components';

interface IUpdateAlertProps extends IStyleAwareProps {
  onClickHandler: () => void;
}

const UpdateAlert: React.SFC<IUpdateAlertProps> = (props) => {
  return (
    <div className={props.className}>
      <Link href="#" onClick={props.onClickHandler}>
        <strong>Heads up!</strong> A new version is available for download.
      </Link>
    </div>
  );
};

const StyledUpdateAlert = styled(UpdateAlert)`
  margin-top: 0px;
  padding: 2px 0;
  background-color: ${(props) => props.theme.updateAlert.primaryBackgroundColor};

  > ${Link} {
    font-size: ${(props) => props.theme.text.secondarySize};
  }
`;

export default StyledUpdateAlert;
