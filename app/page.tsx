import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";

const Home = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="padding-layout">Home</div>
    </ErrorBoundary>
  );
};

export default Home;