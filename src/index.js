import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { GlobalContextProvider } from "./context/context";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
