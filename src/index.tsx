import * as React from "react";
import { render } from "react-dom";

import App from "./components/App";
import "./styles/main.scss";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
