import styled, { IStyleAwareProps } from '../styled-components';

import * as React from 'react';

import { CenteredText } from '../parts/Text';
import ContentSpacing from '../parts/ContentSpacing';
import CenteredContent from '../parts/CenteredContent';

interface IErrorMessageProps extends IStyleAwareProps {
  header?: string;
}

const ErrorMessage: React.SFC<IErrorMessageProps> = (props) => {
  const ErrorMessageHeader = styled(CenteredText)`
    font-weight: 500;
    color: ${(props) => props.theme.text.errorColor};
  `;

  const ErrorMessageNotice = styled(CenteredText)`
    font-weight: 300;
  `;

  return (
    <ContentSpacing>
      <CenteredContent>
        {props.header ? null : (
          <ErrorMessageHeader>
            <span className="icon icon-alert" /> {props.header}
          </ErrorMessageHeader>
        )}
        <ErrorMessageNotice>{props.children}</ErrorMessageNotice>
      </CenteredContent>
    </ContentSpacing>
  );
};

export default ErrorMessage;
