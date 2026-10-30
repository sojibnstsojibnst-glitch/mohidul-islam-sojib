import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: ''
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B132B] text-white flex items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 rounded-2xl bg-[#0D1117] border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white">Something went wrong</h2>
            <p className="text-sm text-[#AAB4C8]">
              An unexpected display issue occurred. Please refresh the page to restore your view.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg hover:opacity-90 transition-opacity"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
