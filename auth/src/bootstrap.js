import React from "react";
import ReactDom from "react-dom";
import { createMemoryHistory,  createBrowserHistory } from "history";
import App from "./App";

// Mount funstion to start up the application
const mount = (el, { onSignIn, onNavigate , defaultHistory , initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries : [initialPath]
  });
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDom.render(<App onSignIn={onSignIn} history={history} />, el);
  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

// If we are in development and in isolation mode,
// call mount() immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot , { defaultHistory: createBrowserHistory() });
  }
}

// we are running through the container
// and we should export the mount function

export { mount };
