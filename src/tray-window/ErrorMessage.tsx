import * as React from 'react';
import { CenteredContent, CenteredText, ContentSpacing, Icon, PhotonIcon } from '../parts';
import styled, { IStyleAwareProps } from '../styled-components';

interface IErrorMessageProps extends IStyleAwareProps {
  header?: string;
  icon?: PhotonIcon;
}

const ErrorMessage: React.SFC<IErrorMessageProps> = ({ header = null, icon = null, ...props }) => {
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
        {header == null ? null : (
          <ErrorMessageHeader>
            {icon == null ? null : <Icon icon={icon} />}
            {header}
          </ErrorMessageHeader>
        )}
        <ErrorMessageNotice>{props.children}</ErrorMessageNotice>
      </CenteredContent>
    </ContentSpacing>
  );
};

export default ErrorMessage;
