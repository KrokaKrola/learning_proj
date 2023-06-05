import { Component, type ErrorInfo, type ReactNode, Suspense } from 'react';
import { ErrorPageContent } from 'widgets/ErrorPageContent';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Suspense fallback={''}>
          <ErrorPageContent />
        </Suspense>
      );
    }

    return this.props.children;
  }
}
