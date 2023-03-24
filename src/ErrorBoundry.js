import React, { Component } from "react";
import App from "./App";
import Error from "./common-components/Error";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Error message={"Something Went Wrong"} />;
    }

    return <App />;
  }
}
