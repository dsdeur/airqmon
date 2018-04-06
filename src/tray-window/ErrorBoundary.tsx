import * as React from 'react';
import errorHandler from '../error-handler';
import { isDev } from '../helpers';
import { PhotonIcon } from '../parts';
import ErrorMessage from './ErrorMessage';

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  static defaultState: IErrorBoundaryState = {
    hasError: false,
  };

  constructor(props) {
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
      <div className="window-content">
        <div className="pane">{content}</div>
      </div>
    );
  }
}

export default ErrorBoundary;
