import * as React from 'react';
import errorHandler from '../error-handler';
import { isDev } from '../helpers';
import { PhotonIcon } from '../parts';
import ErrorMessage from './ErrorMessage';
import styled, { IStyleAwareProps } from '../styled-components';

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IStyleAwareProps, IErrorBoundaryState> {
  static defaultState: IErrorBoundaryState = {
    hasError: false,
  };

  constructor(props: IStyleAwareProps) {
    super(props);

    this.state = ErrorBoundary.defaultState;
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });

    if (!isDev()) {
      errorHandler.error(error);
    } else {
      console.error(error);
    }
  }

  render() {
    let content = this.props.children;

    if (this.state.hasError) {
      content = (
        <ErrorMessage header="Uh oh..." icon={PhotonIcon.alert}>
          Looks like something went wrong. Please try restarting the app.
        </ErrorMessage>
      );
    }

    return (
      <div className={`window-content ${this.props.className}`}>
        <div className="pane">{content}</div>
      </div>
    );
  }
}

const StyledErrorBoundary = styled(ErrorBoundary)`
  background-color: ${(props) => props.theme.background.primaryColor};
  border-right: ${(props) => props.theme.border};
  border-left: ${(props) => props.theme.border};
`;

export default StyledErrorBoundary;
