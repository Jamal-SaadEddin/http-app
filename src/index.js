import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Raven from "raven-js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Raven.config(
  "https://ae1a1e4927e64caaa3a0422974d910de@o4504860639690752.ingest.sentry.io/4504861503389696",
  {
    release: "1-0-0",
    environment: "development-test",
  }
).install();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
