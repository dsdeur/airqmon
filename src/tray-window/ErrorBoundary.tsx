import * as React from 'react';

import { isDev } from '../helpers';
import errorHandler from '../error-handler';

import ErrorMessage from './ErrorMessage';

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
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
        <ErrorMessage header="Uh oh...">
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
