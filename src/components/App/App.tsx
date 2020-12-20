import * as React from "react";
import bemCl from "bem-cl";

import HomePage from "../pages/Home";

import "./App.scss";
import ErrorBoundary from "../basic/ErrorBoundary";

const b = bemCl("app");

const App = () => (
  <div className={b()}>
    <ErrorBoundary>
      <HomePage />
      {/* ReatRouter + 404 handling */}
    </ErrorBoundary>
  </div>
);

export default App;
