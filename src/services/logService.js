import Raven from "raven-js";

function init() {
  Raven.config(
    "https://ae1a1e4927e64caaa3a0422974d910de@o4504860639690752.ingest.sentry.io/4504861503389696",
    {
      release: "1-0-0",
      environment: "development-test",
    }
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
