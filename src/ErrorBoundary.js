// Hey! This ErrorBoundary catches errors in the app.
// If something breaks, it shows a friendly message.
// This helps keep the app running smoothly.

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // This tells us an error happened.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Show this if there's an error.
      return <h2>Something went wrong. Please refresh the page.</h2>;
    }
    // Otherwise, show the app normally.
    return this.props.children;
  }
}

export default ErrorBoundary;
