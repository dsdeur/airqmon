import * as React from 'react';
import errorHandler from '../error-handler';
import { isDev } from '../helpers';
import { PhotonIcon } from '../parts';
import ErrorMessage from './ErrorMessage';
import { IStyleAwareProps } from '../styled-components';

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

    return <>{content}</>;
  }
}

export default ErrorBoundary;
