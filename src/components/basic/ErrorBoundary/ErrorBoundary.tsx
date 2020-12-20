import React, { Component, ErrorInfo, ReactNode } from "react";
import logger from "../../../libs/logger";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error(error.message);
  }

  public render() {
    if (this.state.hasError) {
      // Pass custom error as prop
      return <div>Ooops...</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
