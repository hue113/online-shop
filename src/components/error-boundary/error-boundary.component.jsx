import React from "react";

// switch to class to access to lifecycle methods
class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-boundary vh-100">
          <div className="wrapper p-5 w-100 h-80 d-flex flex-column justify-content-center align-items-center ">
            {/* <div className="wrapper"> */}
            <div className="image mb-5" />
            <h2 className="title mb-4">Sorry! This Page is Not on the Map</h2>
            <p className="description">
              Please contact us to report any technical difficulties you
              experience with our website, or provide suggestions for
              improvement.
              <br /> We appreciate your help!
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
